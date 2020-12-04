const canvas = document.querySelector('#canvas')
const blackBtn = document.querySelector('.black')
const resetBtn = document.querySelector('.reset')
const rgbBtn = document.querySelector('.rgb')

const divColor = null
CreateCanvas(16)
const div = document.querySelectorAll('#canvas div')

function CreateCanvas(num){
    canvas.style.gridTemplateColumns = `repeat(${num},1fr)`
    canvas.style.gridTemplateRows = `repeat(${num},1fr)`
    canvas.setAttribute('gridTemplateRows', num)
    for (let i=0; i<num*num; i++){
        const div = document.createElement('div')
        canvas.appendChild(div)
    }
}

function SetSquareColor(divColor){
    div.forEach(el => el.addEventListener('mouseenter', ()=>{
        el.style.backgroundColor = divColor
     }))
}

blackBtn.addEventListener('click', ()=>{
    SetSquareColor('black')
})

rgbBtn.addEventListener('click', ()=>{
    div.forEach(el => el.addEventListener('mouseenter', ()=>{
        const r = Math.floor(Math.random() * 255)
        const g = Math.floor(Math.random() * 255)
        const b = Math.floor(Math.random() * 255)
        el.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
     }))
})

resetBtn.addEventListener('click', ()=>{
    for(let i=0; i<div.length; i++){
        div[i].style.backgroundColor = 'white'
    }
})