// 12. Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoques = [
    {
        produto: "Arroz branco",
        qtd: 7,
        qtdMinimo: 35
    },
    {
        produto: "Macarrão",
        qtd: 40,
        qtdMinimo: 58
    },
    {
        produto: "Feijão",
        qtd: 19,
        qtdMinimo: 19
    }
]

estoques.forEach(function(estoque){
    if (estoque.qtd < estoque.qtdMinimo)
    {
        estoque.qtd *= 2
    }
    console.log(`${estoque.produto}, quantidade em estoque: ${estoque.qtd}`)
})