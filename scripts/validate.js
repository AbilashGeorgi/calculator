function validate(value) {
    if (value === EQUALS) {
        if (currDisplay != 'second' && document.querySelector(`#second`).textContent.length === 0) {
            return false;
        }
    }
    if (value === CHANGE_SIGN) {
        if (currDisplay === 'operator') {
            return false;
        } else if ((currDisplay === 'first' || currDisplay === 'second') && document.querySelector(`#${currDisplay}`).textContent.length === 0) {
            return false;
        }
    }

    return true;
}