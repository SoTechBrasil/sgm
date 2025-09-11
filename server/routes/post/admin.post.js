const express = require('express');
const router = express.Router();

const Mesa = require('../../models/Mesas');
const authUserJWT = require('../../middleware/authentication');

router.post('/create_table', authUserJWT, (req, res)=> {
    const {table_name, capacidade_max, observacoes} = req.body;

    if (!table_name || !capacidade_max) {
        return res.status(400).json({ message: 'Nome da mesa e capacidade máxima são obrigatórios', success: false });
    }

    const novaMesa = new Mesa({
        table_name,
        capacidade: capacidade_max,
        observacoes
    });

    novaMesa.save()
        .then(() => {
            res.status(201).json({ message: 'Mesa criada com sucesso', success: true });
        })
        .catch((error) => {
            console.error('Erro ao criar mesa:', error.message);
            res.status(500).json({ message: 'Erro ao criar mesa', success: false });
        });
});

module.exports = router;