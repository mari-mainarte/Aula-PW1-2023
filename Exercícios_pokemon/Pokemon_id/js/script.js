const POKURL = 'https://pokeapi.co/api/v2/pokemon/'

function showPokemonById(){
    fetch(POKURL + "?limit=151").then( async (response) => {
        if(response.status == 200){
            let input = document.getElementById("pokId").value
            let pokemonGif = document.getElementById("pokemonGif")
            let pokemonName = document.getElementById("nomePokemon")
            let pokemonId = document.getElementById("idPokemon")

            pokemonId.innerHTML = ""
            pokemonGif.src = " "

            const list_pok = response.json().then( async (api) => {
                console.log(api.results)

                const result = api.results
                console.log(result[input-1])

                if(input<=0||input>1292){
                    pokemonName.innerHTML = "Não encontrado"
                    pokemonGif.src = " "
                }
                else{
                    await fetch(result[input-1]['url']).then( response => {
                        response.json().then( pokInfo => {
                            pokemonId.innerHTML = pokInfo.id + "-"
                            pokemonName.innerHTML = pokInfo.name
                            console.log(pokInfo)
                            pokemonGif.src = pokInfo['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
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