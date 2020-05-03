import Dealer from '../models/Deale';
import * as yup from 'yup';

class DealerController { // Classe onde ficará todas as funções do Dealer


    async store(req, res) {
        const schema = yup.object().shape({
            name: yup.string().required(),
            cpf: yup.string().min(11).required(),
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        });

         if (!(await schema.isValid(req.body))) { // verificando se os dados recebidos estão corretos
            return res.status(404).json({error: 'Validação falhou'})
         }

         const { email } = req.body;

         const dealerExist = await Dealer.findOne({
            email
         });

         if (dealerExist) {
            return res.status(404).json({error: 'Usuario já existe'})
         }

         const deale = await Dealer.create(req.body);

        return res.json(deale);
    }

}

export default new DealerController();