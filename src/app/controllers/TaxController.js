import Tax from '../models/Tax';
import Dealer from '../models/Deale';
import * as yup from 'yup';
import Transaction from '../models/Transaction';

class TaxController {

    async index(req, res) {
        const { id } = req.query;

        if (!id) {
            return res.status(404).json({ error: 'Informe o Id' });
        }

        const userExist = await Dealer.findById(id);

        if (!userExist) {
            return res.status(404).json({ error: 'Usuário não existe' });
        }

        const taxs = await Tax.find({
            id_Dealer: id
        });

        return res.json({ data: taxs });

    }

    async updated(req,res) {
        const { id } = req.body;

        if (!id) {
            return res.status(404).json({ error: 'Informe o Id' });
        }

        const taxExist = await Tax.findById(id);

        if (!taxExist) {
            return res.status(404).json({ error: 'Taxa não encontrada' });
        }

        const response = await taxExist.update({
            pay: true
        });

        return res.json(response);
    }

    async store(req, res) {
        const schema = yup.object().shape({
            id_Dealer: yup.string().required(),
            value: yup.number().required(),
            id_Transaction: yup.string().required(),
        });

        const {id_Dealer, id_Transaction} = req.body;

        if (!(await schema.isValid(req.body))) {
            return res.status(404).json({ error: 'Validação falhou' });
        }

        const userExist = await Dealer.findById(id_Dealer);

        if (!userExist) {
            return res.status(404).json({ error: 'Usuário não existe' });
        }

        const transactionExist = await Transaction.findById(id_Transaction);

        if (!transactionExist) {
            return res.status(404).json({ error: 'Trasação não encontrada' });
        }

        const taxUser = await Tax.create(req.body);

        return res.json(taxUser);

    }

}

export default new TaxController();