const canvas = document.querySelector('#canvas div')

function createCanvas(num){
    for (let i=0; i<num; i++){
        const div = document.createElement('div')
        canvas.appendChild(div)
    }
}