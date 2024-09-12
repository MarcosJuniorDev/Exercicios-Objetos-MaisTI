// 5. Calculando Valores em Arrays de Objetos
// Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
    {
        nome: "Maria Eduarda",
        nota1: 7.6,
        nota2: 9.5
    },
    {
        nome: "João",
        nota1: 5.6,
        nota2: 6.5
    },
    {
        nome: "Miguel",
        nota1: 3.6,
        nota2: 4.5
    }
]

for (let aluno of alunos)
{
    console.log(`Nome: ${aluno.nome}, média: ${(aluno.nota1 + aluno.nota2) / 2}`)
}