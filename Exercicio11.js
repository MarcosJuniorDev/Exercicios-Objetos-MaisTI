// 11. Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente

let pedidos = [
    {
        cliente: "Maria Eduarda",
        produto: "TV Samsung 40",
        qtd: 3
    },
    {
        cliente: "João",
        produto: "PS5 PRO",
        qtd: 7
    },
    {
        cliente: "Maria Eduarda",
        produto: "PS5 PRO",
        qtd: 5
    },
    {
        cliente: "João",
        produto: "TV Samsung 40",
        qtd: 7
    }
]

let totalPedido = {}

pedidos.forEach(function(pedido){
    if (totalPedido[pedido.cliente])
    {
        totalPedido[pedido.cliente] += pedido.qtd
    }
    else
    {
        totalPedido[pedido.cliente] = pedido.qtd
    }
})

for (let key in totalPedido)
{
    console.log(`${key}: ${totalPedido[key]} Produtos.`)
}