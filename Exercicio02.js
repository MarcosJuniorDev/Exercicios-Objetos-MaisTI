// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto

let livro = {
   titulo: "Stormlight Achives",
   autor: "Brandon Sanderson",
   anoPubicacao: 2010,
   genero: "Fantasia" 
}

if (!("editora" in livro))
{
    livro["editora"] = "Tor"
}

for (let key in livro)
{
   
    console.log(`${key}: ${livro[key]}`)
}