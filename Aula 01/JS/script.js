//function nome da função(){
// conteúdo da função
//}

function login(){
    var email = document.getElementById("frmemail").value
    var senha = document.getElementById("frmsenha").value
    console.log(email)
    console.log(senha)
    if(email == "Login@email" && senha =="123456")
    {
        alert("Login válido. Bem vindo!")
    }
    else{
        alert("Login inválido. Tente novamente!")
    }
}

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
    var n2 = parseInt(prompt("Digite o segundo número"))
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
    const produto = document.getElementById("frmproduto").value
    console.log(produto)
    document.getElementById("produto").innerHTML = produto
}