
// do something on divide by zero
function selfDestruct() {
    destroy(NUMBERS);
    destroy(OPERATORS);
    destroy(SPECIALS);
    resetCalc();
}

// function destroy(array) {
//     array.forEach((element) => {
//         const button = document.querySelector(`button[data-value="${element}"]`);
//         setTimeout((button) => {
//             button.textContent = '0';
//         }, 0);
//     });
//     for (i=0; i< 100000; i++) {

//     }
//     array.forEach((element) => {
//         const button = document.querySelector(`button[data-value="${element}"]`);
//         setTimeout((button) => {
//             button.textContent = '1';
//         }, 0);
//     });
//     array.forEach((element) => {
//         const button = document.querySelector(`button[data-value="${element}"]`);
//         setTimeout((button) => {
//             button.textContent = button.getAttribute('data-value');
//         }, 0);
//     });
// }