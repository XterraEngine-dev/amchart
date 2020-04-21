let organizacion = [
    {
        tipo: "INACOP",
        codigo: 30
    },
    {
        tipo: "INACOP",
        codigo: 30
    },
    {
        tipo: "INACOP",
        codigo: 30
    },
    {
        tipo: "XTERRA",
        codigo: 10
    }
]




const ans = _(organizacion).groupBy('tipo').map((tipo, id) => ({tipo: id,codigo: _.sumBy(tipo, 'codigo')})).value()

console.log(ans);