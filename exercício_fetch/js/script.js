const DOGURL = 'https://dog.ceo/api/breeds/'

function getDogImg(){
    fetch(DOGURL + 'image/random').then( response => response.json()).then( data => dogImg.src = data.message)
}