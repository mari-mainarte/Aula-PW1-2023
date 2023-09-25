//function nome da função(){
// conteúdo da função
//}

function cadastrar()
{
    const produto = {
        nome: document.getElementById("prod_nome").value,
        marca: document.getElementById("prod_marca").value,
        preco: document.getElementById("prod_preco").value
    }

    //criar um novo elemento LI
    const lista_item = document.createElement("li")

    //adicionar conteúdo ao elemento

    //adicionar elementos dentro do innerHTML da lista, sem especificar que tipo de elemento ele é
    //lista_item.innerHTML += produto.nome
   // lista_item.innerHTML += produto.marca
   // lista_item.innerHTML += produto.preco

   const prod_nome = document.createElement("h3")
   const prod_marca = document.createElement("h4")
   const prod_preco = document.createElement("p")

   prod_nome.innerHTML = produto.nome
   prod_marca.innerHTML = produto.marca
   prod_preco.innerHTML = produto.preco

   lista_item.appendChild(prod_nome)
   lista_item.appendChild(prod_marca)
   lista_item.appendChild(prod_preco)

    //adicionar LI no UL
    document.getElementById("lista_prod").appendChild(lista_item)
    console.log(lista_item)
    console.log(produto)
}