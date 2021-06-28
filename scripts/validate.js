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

    return true;
}