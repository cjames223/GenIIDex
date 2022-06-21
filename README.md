# GenIIDex
A Pokedex based off the Johto Region.

## API
This application uses the following snippet to pull information from PokeAPI:

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data))
    
## MVP
1. Built with HTML, CSS, and JavaScript.
2. Styled using Grid.
3. Pulls and inserts data from an API(PokeAPI) with Fetch.
4. Implements responsive design on screens less than 800px.
5. Allows users to find information about Pokemon in the Johto region.

## Post-MVP
1. Saves data to the user's browser using localstorage.
2. Add animations.

## Goals
Will try to make at least 4 commits per day.
