// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let carro = {
    marca: "Chevrolet",
    modelo: "Astra",
    ano: 2008,
    cor: "Preto"
}

for (let key in carro)
{
    console.log(`${key}: ${carro[key]}`)
}

