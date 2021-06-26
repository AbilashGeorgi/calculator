//class variable to decide which display to use. See chooseDisplay() function.
let currDisplay = 'first';
//numbers and operator store
let firstNumber = 0;
let secondNumber = 0;
let operator;

//converter from string to const.
function getConstant(value) {
    return ALL_OPTIONS.find((constValue) => constValue === value);
}
// basic checks.
function isNumber(value) {
    return NUMBERS.includes(value);
}
function isOperator(value) {
    return OPERATORS.includes(value);
}

// update the display based on choice.
function display(value) {
    chooseDisplay(value);
    const mainDisplay= document.querySelector(`#${currDisplay}`);
    mainDisplay.innerText += value;
}
function chooseDisplay(value) {
    if (isOperator(value)) {
        currDisplay = 'operator';
    } else if (isNumber(value) && currDisplay === 'operator') {
        currDisplay = 'second';
    }
}
// main function that handles keypress
function clickButton(value) {
    if (value === EQUALS) {
        value = operate(firstNumber,secondNumber,operator);
        resetCalc();
        firstNumber = value;
    } else if (isOperator(value)) {
        operator = value;
    } else if (isNumber(value)) {
        if (operator === null || operator == undefined) {
            firstNumber = firstNumber*10 + +value;
        } else {
            secondNumber = secondNumber*10 + +value;
        }
    }
    console.log(value);
    display(value);
}

function resetCalc() {
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    currDisplay = 'first';
    const displays = [];
    displays.push(document.querySelector('#first'));
    displays.push(document.querySelector('#second'));
    displays.push(document.querySelector('#operator'));
    displays.forEach((display) => display.textContent = '');
}

//add listeners to buttons
const buttonListener = (e)=>{clickButton(getConstant(e.target.innerText))};
function initialiseButtons() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {button.addEventListener('click', buttonListener)})
}

initialiseButtons();