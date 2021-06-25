function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;   
}

function divide(a, b) {
    if (b===0) selfDestruct();
    return a / b;
}

function selfDestruct() {
    
}

const buttonListener = (e)=>{clickButton(e.target.innerText)};
function initialiseButtons() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {button.addEventListener('click', buttonListener)})
}

function clickButton(value) {
    console.log(value);
    display(value);
}

function display(value) {
    //limit - 20
    const mainDisplay= document.querySelector('#first');
    mainDisplay.innerText += value;
}

initialiseButtons();