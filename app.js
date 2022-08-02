document.addEventListener('DOMContentLoaded', () => {
const grid = document.querySelector('#grid')

function setUp() {
    for (let i = 0; i < 25; i++) {
        const tile = document.createElement('div')
        tile.setAttribute('id', i)
        tile.setAttribute('style', 'cursor: pointer')
        tile.innerHTML = i
        grid.appendChild(tile)
    }
 }

setUp()

let tile1 = 'rgb'

document.getElementById('0').setAttribute('style', 'background-color: rgb(0, 0, 255)')
document.getElementById('20').setAttribute('style', 'background-color: rgb(255, 0, 0)')
















})