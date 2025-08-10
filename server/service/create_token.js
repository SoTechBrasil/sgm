const jwt = require('jsonwebtoken');

const createToken = (user) => {
    const payload = {
        id: user.id,
        nome: user.nome,
        role: user.role
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}

module.exports = createToken;