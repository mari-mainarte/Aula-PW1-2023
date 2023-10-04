//Arrow function(
//(param1, param2) => {
//     código
//     return
//}

(param1, param2) => {
    //código
    return
}

() => { }

//função normal com parâmetro
function nome(param1, param2){
    //código
    return
}

//Função Map - percorre pelo array e realiza uma ação
//Array = []
//objeto produtos = {modelo, preço, marca e etc...}
//CALLBACK É UMA FUNÇÃO
//função arrow dentro do .map()
//todo array pode ter uma função map

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const novoNumeros = []
numeros.map( 
    (num) => {
        novoNumeros.push(num * 2)
    } )
console.log(novoNumeros)

//Dado um array de 20 valores , colocar os números pares em uma outra array
