// console.log('hello')
function makeTomato(){
    document.body.style.backgroundColor = 'tomato'
}

const makeCyan = document.getElementById('makeCyan')
makeCyan.onclick = makecyan 

function makecyan(){
    document.body.style.backgroundColor = 'skyblue'
}

const makeBlue =document.getElementById('makeBlue')
makeBlue.onclick = function makeblue(){
    document.body.style.backgroundColor = 'blue'
}
const makeRoseButton = document.getElementById('makeRose')
makeRoseButton.addEventListener('click', makeRose)

function makeRose(){
    document.body.style.backgroundColor = 'pink'
}
const makeGreenButton = document.getElementById('makeGreen')
makeGreenButton.addEventListener('click',function(){
    document.body.style.backgroundColor = 'green'
})

// -------------------- update button
const updateButton = document.getElementById('update-btn')
updateButton.addEventListener('click',function(){
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value
    document.getElementById('title').innerText=inputText
    inputField.value = ''
});