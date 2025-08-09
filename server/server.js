const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db/connect');
require('dotenv').config();

try {
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(cors({ origin: 'http://localhost:3002' })); // Habilita CORS

    connectDB();

    app.use(bodyParser.json()); // Para parsing de JSON
    app.use(bodyParser.urlencoded({ extended: true })); // Para parsing de formulários
    app.use(require('./routes/routes'));

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log(`Acesse: http://localhost:${PORT}`);
    });

} catch (e){
    console.error('Erro ao iniciar o servidor:', e);
}