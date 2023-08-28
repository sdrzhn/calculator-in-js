
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        throw new Error("Cannot divided by 0");
    }
    return x / y;
}

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

let result;

switch (operation) {
    case 'add':
        result = add(num1, num2);
        break;
    case 'subtract':
        result = subtract(num1, num2);
        break;
    case 'multiply':
        result = multiply(num1, num2);
        break;
    case 'divide':
        result = divide(num1, num2);
        break;
    default:
        console.log("All operators: add, subtract, multiply, divide");
}

if (result !== undefined) {
    console.log(`Result: ${result}`);
}
