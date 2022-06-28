# Project Overview

## Project Name

GenIIDex

## Project Description

This app is designed to behave like a PokeDex for Generation II Pokemon. It allows you to look up and view basic details about a Pokemon.

### MVP/PostMVP

#### MVP 

- Built with HTML, CSS, and JavaScript 
- Styled using Grid 
- Pulls and inserts data from an API(PokeAPI) with Fetch
- Implements responsive design on screens less than 1000px
-Allows users to find basic information about Pokemon in the Johto Region

#### PostMVP  

-Incorporate Slider wireframe within the Modal wireframe
-Save data to the user's browser using localstorage
-Add sort functionality 

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Lay out the days you anticipate hitting your major milestones. Below is a suggested schedlue. Feel free to adjust it.

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Timeframes | Complete
|June 22| Project Approval | Complete
|June 22| Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 25| MVP | Complete
|June 26-27| Post-MVP| Incomplete
|June 28| Presentations | Incomplete

## Code Snippet

This code snippet converts the height and weight values for the Pokemon. It converts height from decimeters to feet and inches, and weight from hectograms to pounds. 

```
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

```