// 9. Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

let clientes = [
    {
        nome: "Maria Eduarda",
        idade: 30,
        cidade: "Florianópolis"
    },
    {
        nome: "João",
        idade: 20,
        cidade: "Rio Branco"
    },
    {
        nome: "Miguel",
        idade: 45,
        cidade: "Santos"
    }
]

let count = 0
clientes.forEach(function(cliente)
{    
    if (cliente.idade >= 30)
    {
        count++
    }    
})

console.log(`Temos: ${count} clientes com mais de 30 anos.`)