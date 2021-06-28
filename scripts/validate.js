function validate(value) {
    if (value === EQUALS) {
        if (currDisplay != 'second' && document.querySelector(`#second`).textContent.length === 0) {
            return false;
        }
    }

    return true;
}