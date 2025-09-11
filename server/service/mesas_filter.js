const MesasFilter = (mesas)=> {
    return mesas.map(mesa => {
        return {
            mesa_name: mesa.table_name,
            mesa_status: mesa.status,
            capacidade_max: mesa.capacidade,
            observacoes: mesa.observacoes
        }
    });
}

module.exports = MesasFilter;