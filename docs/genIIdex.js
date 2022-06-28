let url = 'https://pokeapi.co/api/v2/pokemon/'
let species = 'https://pokeapi.co/api/v2/pokemon-species/'
let maincontainer = document.getElementById('main-container')
let imgDiv = document.getElementsByClassName('img-div')
let containerImg = document.getElementsByClassName('container-img')
let containerName = document.getElementsByClassName('container-name')
let type1 = document.getElementsByClassName('type1')
let type2 = document.getElementsByClassName('type2')
let search = document.querySelector('#search-input')
let showButton = document.querySelector('#show-button')
let hideButton = document.querySelector('#hide-button')
let modalContainer = document.querySelector('.modal-container')
let modalImg = document.querySelector('.modal-image')
let closeButton = document.querySelector('.close')
let modalHeader = document.querySelector('.modal-header')
let modalType1 = document.querySelector('#modal-type1')
let modalType2 = document.querySelector('#modal-type2')
let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let habitat = document.querySelector('#habitat')
let entry = document.querySelector('#entry')
let noResults = document.querySelector('#no-results')


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
                .then(data1 => {
                    for(let i = 0; i < imgDiv.length; i++) {
                        if(imgDiv[i].id === data1.name) {
                            containerImg[i].src = data1.sprites.other['official-artwork'].front_default
                            type1[i].innerText = data1.types[0].type.name[0].toUpperCase() + data1.types[0].type.name.slice(1)
                            type1[i].classList.add(`${data1.types[0].type.name}`)
                            if(imgDiv[i].id === data1.name && data1.types[1] !== undefined) {
                                type2[i].innerText = data1.types[1].type.name[0].toUpperCase() + data1.types[1].type.name.slice(1)
                                type2[i].classList.add(`${data1.types[1].type.name}`)
                            }
                        fetch(`${species}${imgDiv[i].id}`)
                            .then(res => res.json())
                            .then(data2 => {
                                imgDiv[i].addEventListener('click', () => {
                                    if(imgDiv[i].id === data2.name) {
                                        modalImg.src = containerImg[i].src
                                        modalHeader.innerText = `${data2.name.toUpperCase()} #${data2.id.toLocaleString('en-US', {
                                            minimumIntegerDigits: 3
                                        })}`
                                        modalType1.innerText = type1[i].innerText
                                        modalType1.classList = type1[i].classList[1]
                                        modalType1.classList.add('type1')
                                        modalType2.innerText = type2[i].innerText
                                        modalType2.classList = type2[i].classList[1]
                                        modalType2.classList.add('type2')
                                        let conHeight = data1.height / 3.048
                                        if(String(conHeight)[0] + String(conHeight)[1] < 10) {
                                            let feetHeight = String(conHeight)[0]
                                            feetHeight = Number(feetHeight)
                                            let stringInch = String(conHeight)
                                            let conInch = stringInch.slice(1)
                                            conInch *= 12
                                            let inchHeight = Math.round(conInch).toLocaleString('en-US', {
                                                minimumIntegerDigits: 2
                                            })
                                            if(inchHeight == 12) {
                                                feetHeight += 1
                                                inchHeight = '00'
                                                height.innerText = `${feetHeight}'${inchHeight}"`
                                            } else {
                                                height.innerText = `${feetHeight}'${inchHeight}"`
                                            }
                                        } else if(String(conHeight)[0] + String(conHeight)[1] > 9) {
                                            let feetHeight = String(conHeight)[0] + String(conHeight)[1]
                                            feetHeight = Number(feetHeight)
                                            let stringInch = String(conHeight)
                                            let conInch = stringInch.slice(2)
                                            conInch *= 12
                                            let inchHeight = Math.round(conInch).toLocaleString('en-US', {
                                                minimumIntegerDigits: 2
                                            })
                                            if(inchHeight == 12) {
                                                feetHeight += 1
                                                inchHeight = '00'
                                                height.innerText = `${feetHeight}'${inchHeight}"`
                                            } else {
                                                height.innerText = `${feetHeight}'${inchHeight}"`
                                            }
                                        }
                                        let conWeight = data1.weight / 4.5359237
                                        weight.innerText = `${conWeight.toFixed(1)} LBS`
                                        habitat.innerText = data2.habitat.name.toUpperCase()
                                        let pokeDex = data2.flavor_text_entries[5].flavor_text.toUpperCase().replace(/['\n']/g, ' ')
                                        entry.innerText = pokeDex
                                    }
                                    modalContainer.classList.add('show')
                                })
                            })
                        }
                        showButton.addEventListener('click', () => {
                            if(imgDiv[i].style.display === '') {
                                imgDiv[i].style.display = 'block'
                               showButton.classList.add('hide')
                               hideButton.classList.remove('hide')
                            }
                        })
                        hideButton.addEventListener('click', () => {
                            if(imgDiv[i].style.display === 'block') {
                                imgDiv[i].style.display = ''
                                hideButton.classList.add('hide')
                                showButton.classList.remove('hide')
                            }
                        })
                        search.addEventListener('search', () => {
                            if(search.value !== '' && imgDiv[i].id.toLowerCase().startsWith(search.value.toLowerCase()) || search.value.toLowerCase() === type1[i].innerText.toLowerCase() || search.value.toLowerCase() === type2[i].innerText.toLowerCase()) {
                                imgDiv[i].style.display = 'block'
                            }   
                            if(search.value !== '' && !imgDiv[i].id.toLowerCase().startsWith(search.value.toLowerCase()) && search.value.toLowerCase() !== type1[i].innerText.toLowerCase() && search.value.toLowerCase() !== type2[i].innerText.toLowerCase()) {
                                imgDiv[i].style.display = ''
                            }
                            if(search.value === '') {
                                imgDiv[i].style.display = ''
                                hideButton.classList.add('hide')
                                showButton.classList.remove('hide')
                            
                            }
                        })                                                    
                    }
                })
        }
    })
closeButton.addEventListener('click', () => {
    modalContainer.classList.remove('show')
})

//search.value.toLowerCase() === imgDiv[i].id.toLowerCase()






fetch(`${species}ho-oh`)
    .then(res => res.json())
    .then(data => console.log(data))