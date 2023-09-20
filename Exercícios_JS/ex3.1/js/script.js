//function nome da função(){
// conteúdo da função
//}

function calculadora(){
    let opcoes = prompt("Digite a operação desejada: soma, subtração, multiplicação e divisão")
    let n1 = parseInt(prompt("Digite o primeiro numero: "))
    let n2 = parseInt(prompt("Digite o segundo numero: "))
    switch (opcoes) {
        case 'soma':
            let soma = n1+n2
            console.log("Soma: ", soma)
            break

        case 'subtração':
            let sub = n1-n2
            console.log("Subtração: ", sub)
            break

        case 'multiplicação':
            let mult = n1*n2
            console.log("Multiplicação: ", mult)
            break

        case 'divisão':
            let div = n1/n2
            console.log("Divisão: ", div)
         break
    }
}