const express = require('express');
const router = express.Router();
const Mesa = require('../../models/Mesas');
const AuthorizationUserMiddleware = require('../../middleware/authorization');
const AuthenticateJWT = require('../../middleware/authentication');

router.get('/', (req, res) => {
    res.json({ mensagem: 'Servidor funcionando com body-parser!' });
});

router.get('/list/mesas', AuthenticateJWT, AuthorizationUserMiddleware(['read']), async (req, res) => {
    try {
        const mesas = await Mesa.find();
        const mesasFiltradas = mesas.map(mesa => {
            return {
                mesa_name: mesa.table_name,
                mesa_status: mesa.status,
                capacidade_max: mesa.capacidade,
                observacoes: mesa.observacoes
            }
        })

        res.status(200).json(mesasFiltradas);
    } catch (e) {
        console.error(e);
        res.status(500).json({ mensagem: 'Erro ao listar mesas.' });
    }
});

module.exports = router;