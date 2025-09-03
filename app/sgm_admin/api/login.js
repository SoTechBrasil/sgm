async function login(email, senha) {
    const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST',
        credentials: 'include', // Inclui cookies na requisição
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Erro ao fazer login');
    }
    return data;
}

export default login;