let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
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
                document.getElementById('display').value = "Nie dziel przez 0!";
                return;
            } else {
                result = prev / current;
            }
            break;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
