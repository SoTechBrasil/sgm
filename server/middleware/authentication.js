const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token_sgm;
    console.log("Token recebido:", token);
    if(!token) return res.status(401).json({ message: 'Token não fornecido', success: false });

    jwt.verify(token, process.env.JWT_SECRET, (err, user)=> {
        if(err) return res.status(403).json({ message: 'Token inválido', success: false, erro: 'autenticacao'});
        req.user = user;
        next();
    })
}

module.exports = authenticateJWT;