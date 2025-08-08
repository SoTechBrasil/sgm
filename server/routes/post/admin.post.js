const express = require('express');
const router = express.Router();
const validateEmail = require('../../validate/email');
const validatePassword = require('../../validate/password');

router.post('/login', async (req, res) => {
    try {
        const { dataLogin } = req.body;

        const emailValidation = validateEmail(dataLogin.email);
        const passwordValidation = validatePassword(dataLogin.senha);

        if (emailValidation.error) {
            throw new Error(emailValidation.error.details[0].message);
        } else if (passwordValidation.error) {
            throw new Error(passwordValidation.error.details[0].message);
        }

        console.log('Dados de login recebidos:', dataLogin);
        res.status(200).json({ message: 'Login realizado com sucesso', sucess: true });
    } catch (error) {
        console.error('Erro ao fazer login:', error.message);
        res.status(400).json({ message: error.message, sucess: false });
    }
});

module.exports = router;