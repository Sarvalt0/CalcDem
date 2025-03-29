let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
}

function setOperation(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                throw new Error("Nie dziel przez 0!");
            }
            result = prev / current;
            break;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function clear() {
    currentInput = '';
    previousInput = '';
    operator = '';
}

function getCurrentInput() {
    return currentInput;
}

module.exports = {
    appendNumber,
    setOperation,
    calculate,
    clear,
    getCurrentInput,
    currentInput,
    operator,
    previousInput
};
