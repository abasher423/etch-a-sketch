// Variable to select the outer (main) grid
const grid = document.querySelector('#grid')

// Variables to select the inputs
const blackBtn = document.querySelector('.black')
const resetBtn = document.querySelector('.reset')
const rgbBtn = document.querySelector('.rgb')
const colorWell = document.querySelector('#col')
const slider = document.querySelector('#slider')

// Colors array containing colors from the rainbow
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]

// function creates a grid depending on the size it recieves
function CreateGrid(gridSize){
    grid.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize},1fr)`
    for (let i=0; i<gridSize*gridSize; i++){
        const div = document.createElement('div')
        grid.appendChild(div)
    }    
}

// function which updates the number of cells in the grid
function UpdateGrid(){
    document.querySelector('#sliderLabel').innerHTML = slider.value
    RemoveAllChildNodes(grid)
    CreateGrid(slider.value)
    Reset()
    SetSquareColor('white')
}

// function which removes all child nodes (used when updating grid)
function RemoveAllChildNodes(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

// function to set the cells background color
function SetSquareColor(divColor){
    let cells = grid.children
    for (let i=0; i<cells.length; i++){
        cells[i].addEventListener('mouseenter', ()=>{
            cells[i].style.backgroundColor = divColor
        })
    }
}

