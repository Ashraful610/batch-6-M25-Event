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

// ------------- input event ----------------
const inputEvent = document.getElementById('input-event')
inputEvent.addEventListener('blur', function(){
    console.log('input event blur');
})
inputEvent.addEventListener('focus', function(){
    document.body.style.backgroundColor='steelblue';
});

// const sendButton = document.getElementById('send-btn')
// sendButton.addEventListener('mousedown', function(){
//     console.log('mousedown');
// });
// const sendButton = document.getElementById('send-btn')
// sendButton.addEventListener('mouseenter', function(){
//     console.log('mouse enter');
// });
// const sendButton = document.getElementById('send-btn')
// sendButton.addEventListener('mouseleave', function(){
//     console.log('mouse leave');
// });
// const sendButton = document.getElementById('send-btn')
// sendButton.addEventListener('mousemove', function(){
//     console.log('mouse move');
// });