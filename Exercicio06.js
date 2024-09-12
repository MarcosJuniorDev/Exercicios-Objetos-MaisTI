// 6. Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

let funcionarios = [
    {
        nome: "Maria Eduarda",
        cargo: "Contador",
        salario: 4000.00
    },
    {
        nome: "João",
        cargo: "Administrador",
        salario: 2500.00
    },
    {
        nome: "Miguel",
        cargo: "Vendas",
        salario: 1400.00
    }
]

for (let funcionario of funcionarios)
{
    if (funcionario.salario >= 2000.00)
    {
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo} e Salário: ${funcionario.salario}`)
    }
}

