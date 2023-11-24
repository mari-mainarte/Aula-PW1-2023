const POKURL = 'https://pokeapi.co/api/v2/pokemon/'
const URL = 'https://pokeapi.co/api/v2/pokemon/'


function showModal(){
    let pokGifs = []
    fetch(URL + "?limit=251").then( (response) => {
        if(response.status == 200){
           pokGifs = response.json().then( api => {
                    let pokemonGif = document.getElementById("pokGif")
                    let pokemonName = document.getElementById("nomePokemon")
                    let pokemonId = document.getElementById("idPokemon")

                    pokemonId.innerHTML = ""
                    pokemonGif.src = " "

                    console.log(api.results.map( pokLi => {
                        fetch(pokLi.url).then( pokInfo => { pokeIcon = pokInfo.json().then( (pokImg) => {(pokemonGif.src = pokImg['sprites']['versions']['generation-v']['black-white']['animated']['front_default'])})})
                        pokemonName.innerHTML = pokLi.name
                        pokemonId.innerHTML = pokLi.id
                 }))
                return api
            })
            return pokGifs
        }
    })
}

let pokedex = []
    fetch(POKURL + '?limit=251').then( response => {
        if(response.status == 200){
            pokedex = response.json().then( api => {
                console.log(api.results.map( pokLi => {
                        let pokemonLi = document.createElement("li")
                        let pokemonIcon = document.createElement("img")
                        let pokemonName = document.createElement("h3")
                        fetch(pokLi.url).then( pokInfo => { pokeIcon = pokInfo.json().then( (pokImg) => {(pokemonIcon.src = pokImg['sprites']['versions']['generation-vii']['icons']['front_default'])})})
                        pokemonName = pokLi.name
                        pokemonLi.innerHTML = 
                        `
                            <a href="#pok_modal" onclick="showModal()">${pokemonName}</a>
                            <img src="${pokemonIcon.src}" class="pokIcon">
                        `
                        pokemonLi.appendChild(pokemonIcon)
                        document.getElementById("pokLi").appendChild(pokemonLi)
                }))
                return api
            })
            return pokedex
        }
    })
