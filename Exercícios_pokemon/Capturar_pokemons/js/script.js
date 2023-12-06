const POKURL = 'https://pokeapi.co/api/v2/pokemon/'
    //pokemonIcon.src = pokImg['sprites']['versions']['generation-vii']['icons']['front_default']

let pokedex = []
    fetch(POKURL + "?limit=251").then( (response) => {
        if(response.status == 200){
            pokedex = response.json().then( (api) => {
                console.log(api.results)
                api.results.map((pokLi) => {
                    let pokemonLi = document.createElement("li")
                    let pokemonImg = document.createElement("img")
                    let pokemonName = document.createElement("h4")
                    let idPokemon = document.createElement("h5")
                    fetch(pokLi.url).then( pokInfo => { pokeIcon = pokInfo.json().then( (pokImg) => {(pokemonImg.src = pokImg['sprites']['front_default'])})})
                    fetch(pokLi.url).then( pokId => { pokeId = pokId.json().then( (id_pok) => {(idPokemon.innerHTML = "Nº " + id_pok['id'])})})
                    pokemonName.innerHTML = pokLi.name
                    pokemonImg.id = 'pokImg'
                    pokemonLi.innerHTML = 
                     `
                        <button onclick="capturarPokemons()"><img src="pokebolla.png" id="pokball"></button>
                     `
                    
                    pokemonLi.appendChild(pokemonImg)
                    pokemonLi.appendChild(idPokemon)
                    pokemonLi.appendChild(pokemonName)
                    document.getElementById("pokedexList").appendChild(pokemonLi)
                })
                return api
            })
            return pokedex
        }
        console.log(pokedex)
})

function showModal(){
    fetch(POKURL + "?limit=251").then( async (response) => {
        if(response.status == 200){
            let input = document.getElementById("input").value
            let pokemonGif = document.getElementById("pokGif")
            let pokemonName = document.getElementById("nomePokemon")
            let pokemonId = document.getElementById("idPokemon")
            let pokemonH = document.getElementById("alturaPokemon")
            let pokemonP = document.getElementById("pesoPokemon")
            let pokemonType = document.getElementById("type")
            let pokemonType2 = document.getElementById("type2")
            let pokemonText = document.getElementById("text")
            pokemonId.innerHTML = ""
            pokemonGif.src = " "

            const list_pok = response.json().then( async (api) => {
                const result = api.results
                if(input<1 || input>251 ){
                    pokemonName.innerHTML = "Não encontrado!"
                    pokemonH.innerHTML = ""
                    pokemonP.innerHTML = ""
                    pokemonType.innerHTML = ""
                    pokemonType2.innerHTML = ""
                    pokemonText.innerHTML = ""
                }else{
                    await fetch(result[input-1]['url']).then( response => {
                        response.json().then( pokInfo => {
                            pokemonId.innerHTML = "Nº" + pokInfo.id 
                            pokemonName.innerHTML = pokInfo.name
                            pokemonGif.src = pokInfo['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                            pokemonType.innerHTML = pokInfo['types']['name']
                            pokemonH.innerHTML = pokInfo.height
                            pokemonP.innerHTML = pokInfo.weight
                            if(pokemonGif.src == "null"){
                                pokemonGif.src = pokInfo['sprites']['front_default']
                            }
                        })
                    })
                    await fetch(result[input-1]['url']).then( response => {
                        response.json().then( pokInfo => {
                            pokemonType.innerHTML = pokInfo['types']['0']['type']['name']
                        })
                    })
                    await fetch(result[input-1]['url']).then( response => {
                        response.json().then( pokInfo => {
                            fetch(pokInfo['species']['url']).then( poktext => {
                                poktext.json().then( ptxt => {
                                    pokemonText.innerHTML = ptxt['flavor_text_entries']['0']['flavor_text']
                                })
                            })
                            pokemonType2.innerHTML = pokInfo['types']['1']['type']['name']
                            if(pokemonType2.innerHTML == "undefined")
                            {
                                pokemonType2.innerHTML = ""
                            }
                        })
                    })

                }
            })
        }
    })
}

