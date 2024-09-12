// 8. Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

let filmes = [
    {
        titulo: "O Senhor dos Anéis A sociedade do Anel.",
        direto: "Peter Jackson",
        anoLancamento: 2001
    },
    {
        titulo: "O Senhor dos Anéis As Duas Torres.",
        direto: "Peter Jackson",
        anoLancamento: 2002
    },
    {
        titulo: "O Senhor dos Anéis O Retorno do Rei.",
        direto: "Peter Jackson",
        anoLancamento: 2003
    }
]


filmes.forEach(function(filme)
{
    console.log(`Titulo: ${filme.titulo}`)
})