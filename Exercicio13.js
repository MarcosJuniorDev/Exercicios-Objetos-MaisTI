// 13. Implementando um Carrinho de Compras
// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

let carrinhoCompras = {
    itens: [
        {
            nome: "TV Samsung 40",
            quantidade: 7,
            precoUnitario: 2300.00
        },
        {
            nome: "RTX 4090",
            quantidade: 5,
            precoUnitario: 8500.00
        },
        {
            nome: "Teclado Mecânico Corsair",
            quantidade: 18,
            precoUnitario: 1200.00
        }
    ]
}

let totalCarrinho = 0

carrinhoCompras.itens.forEach(function(carrinho){
    totalCarrinho += (carrinho.quantidade * carrinho.precoUnitario)
})

console.log(`O valor total do carrinho é: ${totalCarrinho.toFixed(2)}`)
    
