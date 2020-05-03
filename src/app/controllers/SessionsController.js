import Dealer from '../models/Deale';
import * as yup from 'yup';

class SessionsController {

    async store(req, res) {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        });

        if (!(await schema.isValid(req.body))) { // verificando se os dados recebidos estão corretos
            return res.status(404).json({ error: 'Validação falhou' })
        }

        const { email, password } = req.body;

        const dealerExist = await Dealer.findOne({
            email
        });

        if (!dealerExist) {
            return res.status(404).json({ error: 'Nenhum usuário cadastrado com esse E-mail' });
        }

        if (password !== dealerExist.password) {
            return res.status(404).json({ error: 'Senha invalida' });
        }

        return res.json(dealerExist);
    }

}

export default new SessionsController();