const Joi = require('joi');

const validateEmail = (email) =>{
    const schema = Joi.string().email().required();
    return schema.validate(email);
}

module.exports = validateEmail;