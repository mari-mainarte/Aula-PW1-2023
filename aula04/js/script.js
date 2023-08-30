//function nome da função(){
// conteúdo da função
//}

function array()
{
    //array = variável que pode ter vários valores adicionados, um gp de valores
    //todos os valores devem ser do mesmo tipo
    let n = [3, 4, 5, 6, 2, 1]
    console.log("Esse console log mostra o array completo")
    console.log(n)
    //ou console.log("Esse console log mostra o array completo" + n)
    console.log("Esse console log mostra o valor do índice 0 do array")
    console.log(n[0])
    //ou console.log("Esse console log mostra o valor do índice 0 do array" + n[0])
    console.log("Esse console log mostra o valor do índice 6 do array" + n[6])
    
    n[6] = "7"
    console.log("Esse console log mostra o valor do índice 6 do array" + n[6])
    
    console.log("Esse console log mostra o array completo")
    console.log(n)
   
    n.push(50)
    n.push(30)
    n.push(10)
    //array.push() empurra um valor para dentro da array
   
    console.log("Esse console log mostra o array completo")
    console.log(n)

    n.pop()
    console.log("Esse console log mostra o array completo")
    console.log(n)
    n.pop()
    console.log("Esse console log mostra o array completo")
    console.log(n)
    n.pop()
    console.log("Esse console log mostra o array completo")
    console.log(n)
    //array.pop() remove o último elemento de uma array e retorna


}

//funções de pilha push(); e pop(); ex: comando Ctrl z

function objeto()
{
    let carrinho_de_compras = []
    let nome = "Arroz"
    let preco = 10.52
    let marca = "Saulão"

    let produto = {
        nome_prod: "Arroz",
        preco_prod: 10.52,
        marca_prod: "Saulão"
    }

    console.log(produto)
    console.log(produto.nome_prod)
    console.log(produto.preco_prod)
    console.log(produto.marca_prod)

    carrinho_de_compras.push(produto);
    //Objeto: let variável ={
    // variável: valor,
    // variável2: valor
    //}

    let produto2 = {
        nome_prod: "Feijão",
        preco_prod: 8.52,
        marca_prod: "Gostoso"
    }

    carrinho_de_compras.push(produto2);
    console.log(carrinho_de_compras);

    console.log(carrinho_de_compras[0].nome_prod);
}