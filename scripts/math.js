//entry function
function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case ADD:
            return add(firstNumber,secondNumber);
        case SUBTRACT:
            return subtract(firstNumber,secondNumber);
        case MULTIPLY:
            return multiply(firstNumber,secondNumber);
        case DIVIDE:
            return divide(firstNumber, secondNumber);
    }
}
//calculator operations.
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
    if (b===0) {
        selfDestruct();
        return "/0";
    }
    return a / b;
}