const { REFUSED } = require("dns");

function validate(value) {
    if (value === EQUALS) {
        if (currDisplay != SECOND_DISPLAY && document.querySelector(`#${SECOND_DISPLAY}`).textContent.length === 0) {
            return false;
        }
    }
    if (value === CHANGE_SIGN) {
        if (currDisplay === OPERATOR_DISPLAY) {
            return false;
        } else if ((currDisplay === FIRST_DISPLAY || currDisplay === SECOND_DISPLAY) && document.querySelector(`#${currDisplay}`).textContent.length === 0) {
            return false;
        }
    }
    if (isOperator(value) && currDisplay != FIRST_DISPLAY) {
        return false;
    }
    if (value === DECIMAL_POINT) {
        // should only work on numbers and 2 decimal points aren't allowed
        if (currDisplay === OPERATOR_DISPLAY) {
            return false;
        } else {
            return !document.querySelector(`#${currDisplay}`).textContent.includes('.');
        }

    }

    return true;
}