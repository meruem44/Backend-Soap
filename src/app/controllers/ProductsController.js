import Product from '../models/Products';
import * as yup from 'yup';

//Criamos uma classe para gerenciar as funções do Produtos
class ProductsController {

    async index(req,res)  {
        const products = await Product.find();

        res.json({data: products});
    }

    async store(req, res) { // validação
        const schema = yup.object().shape({
            name: yup.string().required(),
            description: yup.string().required(),
            amount: yup.number().required(),
            url: yup.string().required(),
        });

         if (!(await schema.isValid(req.body))) { // verificando se os dados recebidos estão corretos
            return res.status(404).json({error: 'Validação falhou'})
         }

         const { name } = req.body;

         const productExist = await Product.findOne({ // não deixa cadastrar um produto com o mesmo nome
            name
         });

         if (productExist) {
            return res.status(404).json({error: 'Produto já cadastrado'})
         }

         const product = await Product.create(req.body);

        return res.json(product);
    }

}

export default new ProductsController();