const POKURL = 'https://pokeapi.co/api/v2/pokemon/'
    //pokemonIcon.src = pokImg['sprites']['versions']['generation-vii']['icons']['front_default']

function showModal(){
    fetch(POKURL + "?limit=251").then( async (response) => {
        if(response.status == 200){
            let input = document.getElementById("input").value
            let pokemonGif = document.getElementById("pokGif")
            let pokemonName = document.getElementById("nomePokemon")
            let pokemonId = document.getElementById("idPokemon")
            let pokemonH = document.getElementById("alturaPokemon")
            let pokemonP = document.getElementById("pesoPokemon")
            pokemonId.innerHTML = ""
            pokemonGif.src = " "

            const list_pok = response.json().then( async (api) => {
                const result = api.results
                if(input<1 || input>251 ){
                    pokemonName.innerHTML = "Não encontrado!"
                }else{
                    await fetch(result[input-1]['url']).then( response => {
                        response.json().then( pokInfo => {
                            pokemonId.innerHTML = "#" + pokInfo.id 
                            pokemonName.innerHTML = pokInfo.name
                            pokemonGif.src = pokInfo['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                            pokemonH.innerHTML = pokInfo.height
                            pokemonP.innerHTML = pokInfo.weight
                            if(pokemonGif.src == "null"){
                                pokemonGif.src = pokInfo['sprites']['front_default']
                            }
                        })
                    })
                }
            })
        }
    })
}

function createTeam(pokemon){

}

function capturarPokemons(capturados, pokemon){
    if(capturados.lenght > 6){
        prompt("Voçê não pode capturar mais pokemóns, seu time está completo")
    }else{
        capturados.push(pokemon)
    }
}

let pokedex = []
let capturados = []
fetch(POKURL + '?limit=251').then( (response) => {
    if(response.status == 200){
        pokedex = response.json().then( (api) => {
            console.log(api.results)
            const pok = api.results
            fetch(pok.map((pokLi) => {
                let pokemonLi = document.createElement("li")
                let pokemonImg = document.createElement("img")
                let pokemonName = document.createElement("h4")
                let idPokemon = document.createElement("h5")
                fetch(pokLi.url).then( pokInfo => { pokeIcon = pokInfo.json().then( (pokImg) => {(pokemonImg.src = pokImg['sprites']['front_default'])})})
                fetch(pokLi.url).then( pokId => { pokeId = pokId.json().then( (id_pok) => {(idPokemon.innerHTML = "#" + id_pok['id'])
                })})
                pokemonName.innerHTML = pokLi.name
                pokemonLi.innerHTML = 
                 `
                    <button onclick="capturarPokemons()">Capturar</button>
                 `
                pokemonLi.appendChild(pokemonImg)
                pokemonLi.appendChild(pokemonName)
                pokemonLi.appendChild(idPokemon)
                document.getElementById("pokedexList").appendChild(pokemonLi)
            }))
            return api
        })
        return pokedex
    }
    console.log(pokedex)
})