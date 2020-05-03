import Transaction from '../models/Transaction';
import Dealer from '../models/Deale';
import Product from '../models/Products';
import ImformationUser from '../models/InformationUser';
import TaxController from  './TaxController';
import * as yup from 'yup';
import InformationUser from '../models/InformationUser';

class TransactionController {

    async index(req,res) {
        const { id } = req.query;

        if (!id) {
            return res.status(404).json({ error: 'Informe o Id.' });
        }

        const transactions = await Transaction.find({
            id_Dealer: id
        }).populate('id_product');

        return res.json({data: transactions})
    }

    async store(req, res) {
        const schema = yup.object().shape({
            id_Dealer: yup.string().required(),
            amount: yup.number().required(),
            id_product: yup.string().required()
        }); 

        if (!(await schema.isValid(req.body))) { // verificando se os dados recebidos estão corretos
            return res.status(404).json({ error: 'Validação falhou' })
        }

        const { id_Dealer, amount, id_product } = req.body;

        const dealerExist = await Dealer.findById(id_Dealer);


        if (!dealerExist) {
            return res.status(404).json({ error: 'Usuário não existe' });
        }

        const productExist = await Product.findById(id_product);

        if (!productExist) {
            return res.status(404).json({ error: 'Produto não existe' });
        }

        const { amount: amountProduct } = productExist;

        const value = amountProduct * amount;

        const information = await ImformationUser.findOne({
            user_id: id_Dealer
        });

        if (!information) {
            return res.status(404).json({ error: 'Erro ao realizar a operação.' });
        }

        const { profit, spendSold, spendProduct, tax } = information;

        let valueAquiotra = value * 18.5 / 100;
        let taxTransaction = value * 6 / 100;
        let profitCalc = value - valueAquiotra - taxTransaction;

        let spendProductAtt = spendProduct + value;
        let spendSoldAtt = spendSold + amount;
        let taxAtt = tax + taxTransaction;
        let profitAtt = profitCalc + profit;

        const result = await information.update({
            spendProduct: spendProductAtt,
            spendSold: spendSoldAtt,
            tax: taxAtt,
            profit: profitAtt
        });

        const transaction = await Transaction.create({
            id_Dealer,
            amount,
            value,
            id_product

        });

        return res.json({
            transaction,
            tax: taxAtt
        });
    }

}

export default new TransactionController();