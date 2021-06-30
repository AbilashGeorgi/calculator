//variable to decide which display to use. See chooseDisplay() function.
let currDisplay = FIRST_DISPLAY;
//numbers and operator store
let firstNumber = 0;
let secondNumber = 0;
let operator;
let history = '';
//limits to display length.
const historyLimit = 70;
const displayLimit = 18;

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
    if (isSpecial(value) && !(value === DECIMAL_POINT)) {
        return;
    }
    chooseDisplay(value);
    const mainDisplay= document.querySelector(`#${currDisplay}`);
    if ((''+value).length > displayLimit) {
        value = (''+value).substr(0,displayLimit);
    }
    mainDisplay.textContent += value;
}
function displayHistory(result) {
    const resultString = firstNumber+operator+secondNumber+'='+result+',';
    const historyDisplay = document.querySelector(`#${HISTORY_DISPLAY}`);
    if (resultString.length > historyLimit) {
        historyDisplay.textContent = '';
    }
    let history = historyDisplay.textContent;
    while (history.length + resultString.length > historyLimit) {
        history = history.substring(history.indexOf(',') + 1);
    }
    history = history +resultString;
    historyDisplay.textContent = history;

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
        firstNumber = +document.querySelector(`#${FIRST_DISPLAY}`).textContent;
        secondNumber = +document.querySelector(`#${SECOND_DISPLAY}`).textContent;
        operator = getConstant(document.querySelector(`#${OPERATOR_DISPLAY}`).textContent);
        value = operate(firstNumber,secondNumber,operator);
        displayHistory(value);
        resetCalc(false);
        firstNumber = value;
    } else if (value === ALL_CLEAR) {
        resetCalc(true);
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

function resetCalc(removeHistory) {
    firstNumber = 0;
    secondNumber = 0;
    operator = null;
    currDisplay = FIRST_DISPLAY;
    const displays = [];
    displays.push(document.querySelector(`#${FIRST_DISPLAY}`));
    displays.push(document.querySelector(`#${SECOND_DISPLAY}`));
    displays.push(document.querySelector(`#${OPERATOR_DISPLAY}`));
    if (removeHistory) displays.push(document.querySelector(`#${HISTORY_DISPLAY}`));
    displays.forEach((display) => display.textContent = '');
}
function clear() {
    value = document.querySelector(`#${currDisplay}`);
    if (currDisplay === OPERATOR_DISPLAY) {
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
const buttonListener = (e)=>{clickButton(getConstant(e.target.textContent))};
function initialiseButtons() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {button.addEventListener('click', buttonListener)})
}

initialiseButtons();
window.addEventListener('keydown', function(e) {
    const button = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!button) return;
    button.click();
});