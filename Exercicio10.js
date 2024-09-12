// 10. Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

let vendas = [
    {
        nome: "TV Samsung 40",
        qtd: 10,
        valor: 2300.00
    },
    {
        nome: "Secador de Cabelo",
        qtd: 35,
        valor: 180.00
    },
    {
        nome: "RTX 4090",
        qtd: 3,
        valor: 9000.00
    }
]

let totalProdutos = 0
vendas.forEach(function(venda)
{
    let total = venda.valor * venda.qtd
    totalProdutos +=total
    console.log(`O valor total de vendas do(a): ${venda.nome} é: ${total.toFixed(2)}`)
})

console.log(`O valor total de venda de todos os produtos é: ${totalProdutos.toFixed(2)}`)