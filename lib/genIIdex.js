let url = 'https://pokeapi.co/api/v2/pokemon/'

fetch(`${url}pidgey`)
    .then(res => res.json())
    .then(data => console.log(data))