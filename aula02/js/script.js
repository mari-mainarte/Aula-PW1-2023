//function nome da função(){
// conteúdo da função
//}

function somar(){
    //parseInt converte o que esta em () para variável tipo number
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    //console.log(typeof(n1)) Essa função devolve o tipo da variável no console
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 + n2
    console.log(resultado)
}

function subtrair()
{
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 - n2
    console.log(resultado)
}

function multiplicar()
{
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 *n2
    console.log(resultado)
}

function dividir()
{
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1/n2
    console.log(resultado)
}

function quadrado()
{
    var n1 = parseInt(prompt("Digite o primeiro número"))
    console.log(typeof(n1))
    var resultado = n1 * n1
    console.log(resultado)
}
//manipular DOM(Document Object Model)

function raiz()
{
	var n1 = parseInt(prompt("Digite o primeiro número"))
	const raiz = Math.sqrt(n1);
	console.log(raiz);
}

function potencia()
{
    var n1 = parseInt(prompt("Digite o primeiro número"))
    var n2 = parseInt(prompt("Digite o segundo número"))
    console.log(typeof(n1))
    console.log(typeof(n2))
    var resultado = n1 ** n2
    console.log(resultado)
}