//function nome da função(){
// conteúdo da função
//}
function nome()
{
    const nome = document.getElementById("frmnome").value
    //const = variável constante
    console.log(nome)
    document.getElementById("exibir_nome").innerHTML = nome
    //innerHTML = adicionar valores ao html
}

function addproduto()
{
    //const produto = document.getElementById("frmproduto").value
    //console.log(produto)
    //document.getElementById("produto").innerHTML = produto
    let produto = document.getElementById("frmproduto").value
    let li = document.createElement("li") 
    //createElement cria o elemento dentro do ()
    li.innerHTML= produto
    document.getElementById("produto").appendChild(li)
    console.log(produto)

}