const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const connectDB = require('./db/connect');
const gerarOuCarregarChave = require('./service/gerarOuCarregarChave');
require('dotenv').config();

try {
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(cors({ origin: 'http://localhost:3002', credentials: true })); // Habilita CORS

    connectDB();
    const jwtSecret = gerarOuCarregarChave();

    app.use(bodyParser.json()); // Para parsing de JSON
    app.use(bodyParser.urlencoded({ extended: true })); // Para parsing de formulários
    app.use(cookie_parser()); // Para parsing de cookies
    app.use(require('./routes/routes'));

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Acesse: http://localhost:${PORT}`);
    });

} catch (e){
    console.error('Erro ao iniciar o servidor:', e);
}