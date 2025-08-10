const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const gerarOuCarregarChave = () => {
    const envPath = path.join(__dirname, '..', '.env');

    if(fs.existsSync(envPath)){
        const envContent = fs.readFileSync(envPath, 'utf-8');
        const match = envContent.match(/^JWT_SECRET=(.+)$/m);
        if(match){
            process.env.JWT_SECRET = match[1];
            return process.env.JWT_SECRET;
        }
    }

    const novaChave = crypto.randomBytes(64).toString('hex');
    process.env.JWT_SECRET = novaChave;

    let envContent = '';
    if(fs.existsSync(envPath)){
        envContent = fs.readFileSync(envPath, 'utf-8');
    }

    envContent += `\nJWT_SECRET=${novaChave}\n`;
    fs.writeFileSync(envPath, envContent);

    console.log('Nova chave JWT_SECRET gerada e salva no .env');
    return novaChave;
}

module.exports = gerarOuCarregarChave;