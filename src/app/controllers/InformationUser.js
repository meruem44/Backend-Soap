import InformationUser from '../models/InformationUser';
import Dealer from '../models/Deale';
import * as yup from 'yup';

class InformationUserController {

    async index(req, res) {

        const { id } = req.query;
        console.log(id)

        if (!id) {
            res.status(400).json({error: 'Informe o Id'});
        }

        const response = await InformationUser.findOne({
            user_id: id
        });

        res.json(response);
    }

    async store(req, res) { // validação
        const schema = yup.object().shape({
            user_id: yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) { // verificando se os dados recebidos estão corretos
            return res.status(404).json({ error: 'Validação falhou' })
        }

        const { user_id } = req.body;

        const userExist = await Dealer.findById(user_id);

        if (!userExist) {
            return res.status(404).json({ error: 'Nenhum usuario encontrado' })
        }

        const informationExist = await Dealer.findOne({
            user_id
        });

        if (informationExist) {
            return res.json(informationExist);
        }

        const information = await InformationUser.create(req.body);

        return res.json(information);
        
    }

}

export default new InformationUserController();