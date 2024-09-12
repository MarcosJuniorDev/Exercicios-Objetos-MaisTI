// 4. Iterando Sobre Arrays de Objetos
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    {
        nome: "Maria Eduarda",
        idade: 15,
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

for (let pessoa of pessoas)
{
    console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade} e Cidade: ${pessoa.cidade}`)
}
