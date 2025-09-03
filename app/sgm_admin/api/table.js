async function createTable(table_name, capacidade_max, observacoes){
    const response = await fetch('http://localhost:3000/admin/create_table', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ table_name, capacidade_max, observacoes })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Erro ao criar mesa');
    }
    return data;
}

export default createTable;