const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mensagem: 'Servidor funcionando com body-parser!' });
});

module.exports = router;