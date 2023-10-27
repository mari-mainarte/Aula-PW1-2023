//Pegar os dados de uma API
//ENDPOINT = final do link da API

const URL = 'https://jsonplaceholder.typicode.com/posts'
const MTGURL = 'https://api.magicthegathering.io/v1/'

function getApiData(){
//Busca os dados da API
//GET URL ("Link da URL" / ENDPOINT)
//(método HTTP)
    
//fetch: método do JS que gera uma requisição ou HTTPS
//Jeito mais bonito: fetch(`${URL}/posts`)

//Assíncrono - "pede" algo a API e "espera a resposta"
//.json() converte a resposta para o padrão json
//reponse é uma variável criada dentro da arrow function
const resultado = fetch(URL).then( response => {console.log(response.json())})

}

function getCardsList(){
    fetch(MTGURL + '/cards').then( response => {
        console.log(response.json())
    })
}