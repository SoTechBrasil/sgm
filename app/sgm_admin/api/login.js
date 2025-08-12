async function login(dataLogin) {
    const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST',
        credentials: 'include', // Inclui cookies na requisição
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dataLogin })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Erro ao fazer login');
    }
    return data;
}

export default login;