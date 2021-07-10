// Variables and selectors
const playButton = document.querySelector('.playButton');
let objectCount = 21;
const counter = document.querySelector('.objectCount');
const gameBoard = document.querySelector('.gameBoard');
const objectContainer = document.querySelector('.objectContainer');
const userInput = document.querySelector('.text');
const endMessage = document.querySelector('.endScreen');
let number ;
const restartButton = document.querySelector('.restartButton');
const button = document.querySelector('.click');
let myTurn = false;


// program
playButton.addEventListener('click',()=>{
    gameBoard.setAttribute('style','z-index: 5;')
})

createObjects(objectCount);

button.addEventListener('click',()=>{
    number = userInput.value;
    if(myTurn === true || number == null) return;
    decrease(number) ;
})



//functions
function createObjects(objCnt){
    losingCase(objCnt);
    counter.innerHTML= `Object Count: ${objCnt}`;
    objectContainer.innerHTML = '';
    for(let i = 0; i< objCnt; i++){
        const object = document.createElement('div');
        object.classList.add('object');
        objectContainer.appendChild(object);
    }
}

function decrease(num){
    console.log(num);
    objectCount -= num;
    console.log(objectCount);
    createObjects(objectCount);
    switchTurn();
    console.log(myTurn);
    setTimeout(()=>{
        computerFunction(num);
    }, 1000 ) ;
}

function switchTurn(){
    myTurn = !myTurn;
}
function computerFunction(num){
    if(myTurn === false) return;
    console.log(myTurn);
    objectCount -= (4 - num);
    createObjects(objectCount);
    switchTurn(); 
}
function losingCase(count){
    if(count > 0) return
    endMessage.setAttribute('style','z-index: 6;');
    restartButton.addEventListener('click', ()=>{
         objectCount = 21;
         createObjects(objectCount)
         endMessage.setAttribute('style','z-index: 3;');
    })
}
