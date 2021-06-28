//numbers
const ZERO = '0';
const ONE = '1';
const TWO = '2';
const THREE = '3';
const FOUR = '4';
const FIVE = '5';
const SIX = '6';
const SEVEN = '7';
const EIGHT = '8';
const NINE = '9';
const NUMBERS = [ZERO,ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE];

//specials
const ALL_CLEAR = 'AC';
const CLEAR = 'C';
const EQUALS = '=';
const CHANGE_SIGN = '+/-';
const SPECIALS = [ALL_CLEAR, CLEAR, EQUALS, CHANGE_SIGN];

//operators
const MULTIPLY = '*';
const DIVIDE = '/';
const SUBTRACT = '-';
const ADD = '+';
const OPERATORS = [ADD, SUBTRACT, MULTIPLY, DIVIDE];

//all
const ALL_OPTIONS = [...NUMBERS, ...OPERATORS, ...SPECIALS];

const FIRST_DISPLAY = 'first';
const SECOND_DISPLAY = 'second';
const OPERATOR_DISPLAY = 'operator';