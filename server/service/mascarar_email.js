const MascararEmail = (email)=> {
    const [usuario, dominio] = email.split('@');
    const primeiraLetra = usuario.charAt(0);
    const ultimasLetras = usuario.slice(-3);
    return `${primeiraLetra}*****${ultimasLetras}@${dominio}`;
}

module.exports = MascararEmail;