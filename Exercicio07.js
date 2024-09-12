// // 7. Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

let produtos = [
    {
        nome: "TV Samsung 40",
        preco: 2300.00,
    },
    {
        nome: "Secador de Cabelo",
        preco: 180.00,
    },
    {
        nome: "RTX 4090",
        preco: 9000.00,
    }
]

produtos.forEach(function(produto){
    produto.desconto = produto.preco * 0.1
    let precoFinal = produto.preco - produto.desconto
    console.log(`Produto: ${produto.nome},
        valor sem desconto: ${produto.preco.toFixed(2)}, 
        preço final com desconto: ${precoFinal.toFixed(2)}
        `)
})