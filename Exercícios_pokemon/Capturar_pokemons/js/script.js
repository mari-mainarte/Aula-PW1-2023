const POKURL = 'https://pokeapi.co/api/v2/pokemon/'

let pokedex = []
    fetch(POKURL + '?limit=251').then( response => {
        if(response.status == 200){
            pokedex = response.json().then( api => {
                console.log(api.results.map( pokLi => {
                        let pokemonLi = document.createElement("li")
                        let pokemonIcon = document.createElement("img")
                        let pokemonName = document.createElement("h3")
                        fetch(pokLi.url).then( pokInfo => { pokeIcon = pokInfo.json().then( (pokImg) => {(pokemonIcon.src = pokImg['sprites']['versions']['generation-vii']['icons']['front_default'])}).then( (pokId) => {(pokmnId.innerHTML = pokId.id)})})
                        pokemonName = pokLi.name
                        pokemonLi.innerHTML = 
                        `
                            <div id="pokLi">
                                <a href="#pokModal">${pokemonName}</a>
                                <img src="${pokemonIcon.src}" class="pokIcon">
                            </div>
                        `
                        pokemonLi.appendChild(pokemonIcon)
                        document.getElementById("pokedexList").appendChild(pokemonLi)
                }))
                return api
            })
            return pokedex
        }
    })
