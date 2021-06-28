//variable to decide which display to use. See chooseDisplay() function.
let currDisplay = FIRST_DISPLAY;
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
function isSpecial(value) {
    return SPECIALS.includes(value);
}

// update the display based on choice.
function display(value) {
    if (isSpecial(value)) {
        return;
    }
    chooseDisplay(value);
    const mainDisplay= document.querySelector(`#${currDisplay}`);
    mainDisplay.innerText += value;
}
function chooseDisplay(value) {
    if (isOperator(value)) {
        currDisplay = OPERATOR_DISPLAY;
    } else if (isNumber(value) && currDisplay === OPERATOR_DISPLAY) {
        //if already on operator display and entering a number switch to second operator display
        currDisplay = SECOND_DISPLAY;
    }
}
// main function that handles keypress
function clickButton(value) {
    if (!validate(value)) {
        return;
    };
    if (value === EQUALS) {
        value = operate(firstNumber,secondNumber,operator);
        resetCalc();
        firstNumber = value;
    } else if (value === ALL_CLEAR) {
        resetCalc();
    } else if (value === CLEAR) {
        clear();
    } else if (value === CHANGE_SIGN) {
        changeSign();
    } else if (isOperator(value)) {
        operator = value;
    } else if (isNumber(value)) {
        if (operator === null || operator == undefined) {
            firstNumber = firstNumber*10 + +value;
        } else {
            secondNumber = secondNumber*10 + +value;
        }
    }
    display(value);
}

function resetCalc() {
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    currDisplay = FIRST_DISPLAY;
    const displays = [];
    displays.push(document.querySelector(`#${FIRST_DISPLAY}`));
    displays.push(document.querySelector(`#${SECOND_DISPLAY}`));
    displays.push(document.querySelector(`#${OPERATOR_DISPLAY}`));
    displays.forEach((display) => display.textContent = '');
}
function clear() {
    value = document.querySelector(`#${currDisplay}`);
    if (currDisplay === OPERATOR) {
        operator = null;
        currDisplay = FIRST_DISPLAY;
    } else if (currDisplay === FIRST_DISPLAY) {
        firstNumber = +value.textContent.slice(0,-1);
    } else if (currDisplay === SECOND_DISPLAY) {
        secondNumber = +value.textContent.slice(0,-1);
        // switch display if no more content in second number.
        if (value.textContent.length === 1) currDisplay = OPERATOR_DISPLAY;
    }
    value.textContent = value.textContent.slice(0,-1);
}
function changeSign() {
    value = document.querySelector(`#${currDisplay}`);
    value.textContent = value.textContent * -1;
}

//add listeners to buttons
const buttonListener = (e)=>{clickButton(getConstant(e.target.innerText))};
function initialiseButtons() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {button.addEventListener('click', buttonListener)})
}

initialiseButtons();