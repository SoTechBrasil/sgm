const Funcionario = require('../../models/Funcionario');

const findAllFuncionarios = async () => {
    try {
        return await Funcionario.find();
    } catch (error) {
        throw error;
    }
};

const findFuncionarioByEmail = async (email) => {
    try {
        return await Funcionario.findOne({ email });
    } catch (error) {
        throw error;
    }
};

module.exports = {
    findAllFuncionarios,
    findFuncionarioByEmail
};