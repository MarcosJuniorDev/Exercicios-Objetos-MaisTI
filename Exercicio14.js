// 14. Manipulando Objetos Complexos
// Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

let empresa = {
    departamentos: [
        {
            nome: "Contabilidade",
            funcionarios: ["Maria Eduarda", "João", "Miguel"]
        },
        {
            nome: "Recursos Humanos",
            funcionarios: ["Diego", "Valeria", "Ana"]
        },
        {
            nome: "Tecnologia",
            funcionarios: ["Marcos", "Emília", "Vagner"]
        }
    ]
}



//u
for (let key in empresa.departamentos)
{   
    let dep = empresa.departamentos[key]
    console.log(`Departamento: ${dep.nome}`)
    
    for (let funcionario of dep.funcionarios)
    {        
        console.log(` ° Funcionário: ${funcionario}`)        
    }
}
