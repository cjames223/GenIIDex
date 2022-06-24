let url = 'https://pokeapi.co/api/v2/pokemon/'
let species = 'https://pokeapi.co/api/v2/pokemon-species/'
let maincontainer = document.getElementById('main-container')
let imgDiv = document.getElementsByClassName('img-div')
let containerImg = document.getElementsByClassName('container-img')
let containerName = document.getElementsByClassName('container-name')
let type1 = document.getElementsByClassName('type1')
let divide = document.getElementsByClassName('type-divide')
let type2 = document.getElementsByClassName('type2')
let showButton = document.querySelector('#show-button')
let hideButton = document.querySelector('#hide-button')

for(let i = 0; i < 100; i++) {
    let newDiv = document.createElement('div')
    let newImg = document.createElement('img')
    let name = document.createElement('h1')
    let type1 = document.createElement('span')
    let type2 = document.createElement('span')
    newDiv.setAttribute('id', 'null')
    newDiv.classList.add('img-div')
    newImg.classList.add('container-img')
    name.classList.add('container-name')
    type1.classList.add('type1')
    type2.classList.add('type2')
    maincontainer.appendChild(newDiv)
    newDiv.appendChild(newImg)
    newDiv.appendChild(name)
    newDiv.appendChild(type1)
    newDiv.appendChild(type2)
}

fetch(`${url}?limit=100&offset=151`)
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < data.results.length; i++) {
            imgDiv[i].id = data.results[i].name
            containerImg[i].name = data.results[i].name
            containerName[i].innerText = data.results[i].name.toUpperCase()
            fetch(`${url}${imgDiv[i].id}`)
                .then(res => res.json())
                .then(data => {
                    for(let i = 0; i < imgDiv.length; i++) {
                        if(imgDiv[i].id === data.name) {
                            containerImg[i].src = data.sprites.other['official-artwork'].front_default
                            type1[i].innerText = data.types[0].type.name[0].toUpperCase() + data.types[0].type.name.slice(1)
                            if(imgDiv[i].id === data.name && data.types[1] !== undefined) {
                                type2[i].innerText = data.types[1].type.name[0].toUpperCase() + data.types[1].type.name.slice(1)
                            }
                        }
                        if(type1[i].innerText === 'Normal') {
                            type1[i].classList.add('normal') 
                        }
                        if(type2[i].innerText === 'Normal') {
                            type2[i].classList.add('normal')
                        }
                        if(type1[i].innerText === 'Fire') {
                            type1[i].classList.add('fire')
                        }
                        if(type2[i].innerText === 'Fire') {
                            type2[i].classList.add('fire')
                        }
                        if(type1[i].innerText === 'Fighting') {
                            type1[i].classList.add('fighting')
                        }
                        if(type2[i].innerText === 'Fighting') {
                            type2[i].classList.add('fighting')
                        }
                        if(type1[i].innerText === 'Water') {
                            type1[i].classList.add('water')
                        }
                        if(type2[i].innerText === 'Water') {
                            type2[i].classList.add('water')
                        }
                        if(type1[i].innerText === 'Flying') {
                            type1[i].classList.add('flying')
                        }
                        if(type2[i].innerText === 'Flying') {
                            type2[i].classList.add('flying')
                        }
                        if(type1[i].innerText === 'Grass') {
                            type1[i].classList.add('grass')
                        }
                        if(type2[i].innerText === 'Grass') {
                            type2[i].classList.add('grass')
                        }
                        if(type1[i].innerText === 'Poison') {
                            type1[i].classList.add('poison')
                        }
                        if(type2[i].innerText === 'Poison') {
                            type2[i].classList.add('poison')
                        }
                        if(type1[i].innerText === 'Electric') {
                            type1[i].classList.add('electric')
                        }
                        if(type2[i].innerText === 'Electric') {
                            type2[i].classList.add('electric')
                        }
                        if(type1[i].innerText === 'Ground') {
                            type1[i].classList.add('ground')
                        }
                        if(type2[i].innerText === 'Ground') {
                            type2[i].classList.add('ground')
                        }
                        if(type1[i].innerText === 'Psychic') {
                            type1[i].classList.add('psychic')
                        }
                        if(type2[i].innerText === 'Psychic') {
                            type2[i].classList.add('psychic')
                        }
                        if(type1[i].innerText === 'Rock') {
                            type1[i].classList.add('rock')
                        }
                        if(type2[i].innerText === 'Rock') {
                            type2[i].classList.add('rock')
                        }
                        if(type1[i].innerText === 'Ice') {
                            type1[i].classList.add('ice')
                        }
                        if(type2[i].innerText === 'Ice') {
                            type2[i].classList.add('ice')
                        }
                        if(type1[i].innerText === 'Bug') {
                            type1[i].classList.add('bug')
                        }
                        if(type2[i].innerText === 'Bug') {
                            type2[i].classList.add('bug')
                        }
                        if(type1[i].innerText === 'Dragon') {
                            type1[i].classList.add('dragon')
                        }
                        if(type2[i].innerText === 'Dragon') {
                            type2[i].classList.add('dragon')
                        }
                        if(type1[i].innerText === 'Ghost') {
                            type1[i].classList.add('ghost')
                        }
                        if(type2[i].innerText === 'Ghost') {
                            type2[i].classList.add('ghost')
                        }
                        if(type1[i].innerText === 'Dark') {
                            type1[i].classList.add('dark')
                        }
                        if(type2[i].innerText === 'Dark') {
                            type2[i].classList.add('dark')
                        }
                        if(type1[i].innerText === 'Steel') {
                            type1[i].classList.add('steel')
                        }
                        if(type2[i].innerText === 'Steel') {
                            type2[i].classList.add('steel')
                        }
                        if(type1[i].innerText === 'Fairy') {
                            type1[i].classList.add('fairy')
                        }
                        if(type2[i].innerText === 'Fairy') {
                            type2[i].classList.add('fairy')
                        }                                                    
                    }
                })
        }
    })

console.log(maincontainer)

showButton.addEventListener('click', () => {
    if(maincontainer.className === 'invis') {
        maincontainer.classList.add('vis')
       maincontainer.classList.remove('invis')
       showButton.classList.add('hide')
       hideButton.classList.remove('hide')
    }
})

hideButton.addEventListener('click', () => {
    if(maincontainer.className === 'vis') {
        maincontainer.classList.add('invis')
        maincontainer.classList.remove('vis')
        hideButton.classList.add('hide')
        showButton.classList.remove('hide')
    }
})
















fetch(`${url}cyndaquil`)
    .then(res => res.json())
    .then(data => console.log(data))