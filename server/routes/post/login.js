const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const validateEmail = require('../../validate/email');
const validatePassword = require('../../validate/password');
const findFuncionario = require('../../db/find/funcionario');
const MascararEmail = require('../../service/mascarar_email');

router.post('/admin', async (req, res) => {
    try {
        const { email, senha } = req.body;

        const emailValidation = validateEmail(email);
        const passwordValidation = validatePassword(senha);

        if (emailValidation.error) {
            throw new Error(emailValidation.error.details[0].message);
        } else if (passwordValidation.error) {
            throw new Error(passwordValidation.error.details[0].message);
        }

        const funcionario = await findFuncionario.findFuncionarioByEmail(email);
        if (!funcionario) {
            throw new Error('Funcionário não encontrado');
        }
        
        const token = jwt.sign({
                id: funcionario.id,
                nome: funcionario.nome,
                email: MascararEmail(funcionario.email),
                role: funcionario.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.cookie("token_sgm", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production' ? true : false, 
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 3600000 // 1 hour
        });

        console.log("Token gerado e enviado:", token);
        console.log(res.cookie);


        console.log('Dados de login recebidos:', {email, senha: '********'});
        console.log('Funcionário encontrado:', funcionario);
        console.log(funcionario.nome + " logou no sistema");
        res.status(200).json({ message: 'Login realizado com sucesso', sucess: true });
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        res.status(400).json({ message: error.message, sucess: false });
    }
});

module.exports = router;