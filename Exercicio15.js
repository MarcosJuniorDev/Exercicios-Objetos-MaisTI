// 15. Filtrando e Somando Valores
// Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

let transacoes = [
    {
        tipo: "Entrada",
        valor: 180.00        
    },
    {
        tipo: "Entrada",
        valor: 700.00      
    },
    {
        tipo: "Saida",
        valor: 300.00        
    },
    {
        tipo: "Saida",
        valor: 300.00        
    },
]

let saldoFinal = 0

transacoes.forEach(function(saldo){
    
    if (saldo.tipo === "Entrada")
    {
        saldoFinal += saldo.valor
    }
    else
    {
        saldoFinal -= saldo.valor
    }    
})

console.log(`Seu saldo é: R$${saldoFinal.toFixed(2)}`)