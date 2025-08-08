const Joi = require('joi');

const validatePassword = (password) =>{
    const schema = Joi.string().min(6).max(100).required();
    return schema.validate(password);
}

module.exports = validatePassword;