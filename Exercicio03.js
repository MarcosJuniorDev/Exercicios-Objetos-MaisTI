// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let produto = {
    nome: "Final Fantasy",
    produtora: "Square Enix",
    anoLancamento: 1987,
    copiasVendidas: 400000.00
}

function vendas(obj, qtdMin)
{
    let newProduto = {}
    for (let key in obj)
    {
        if (key === "copiasVendidas" && obj[key] >= qtdMin)
        {
            newProduto["copiasVendidas"] = obj[key]
        }
    }
    return newProduto
}

console.log(vendas(produto, 100000.00))
