const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cargo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    data_entrada: { type: Date, required: true },
    role: { type: String, enum: ['garcon', 'admin'], required: true },
    rules: { type: [String], enum: ['read', 'write', 'delete', 'all'], required: true },
    senha: { type: String, required: true }
});

const Funcionario = mongoose.model('funcionarios', FuncionarioSchema);
module.exports = Funcionario;