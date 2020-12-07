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

// function assigns cells background color a random color from the array
function Rainbow(){
    let cells = grid.children
    for (let i=0; i<cells.length; i++){
        cells[i].addEventListener('mouseenter', ()=>{
            cells[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
         })
    }
}

// function which updates or changes cells color when color picker is used
function updateFirst(event) {
    let cells = grid.children
        for (let i=0; i<cells.length; i++){
            cells[i].addEventListener('mouseenter', ()=>{
            if (cells[i]){
                cells[i].style.backgroundColor = event.target.value
            }
        })
    }
}

// function to reset all cells back to white
function Reset(){
    let cells = grid.children
    for (let i=0; i<cells.length; i++){
        cells[i].style.backgroundColor = 'white'
    }
}

// event listeners
blackBtn.addEventListener('click', ()=>{
    SetSquareColor('black')
})
resetBtn.addEventListener('click', Reset)
rgbBtn.addEventListener('click', Rainbow)
colorWell.addEventListener("change", updateFirst, false);
colorWell.addEventListener("input", updateFirst, false);
slider.addEventListener('change', UpdateGrid)

// initialises grid to 16x16
CreateGrid(16)