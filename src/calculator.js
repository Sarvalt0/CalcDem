export let currentInput = '';
export let operator = '';
export let previousInput = '';


export function appendNumber(number) {
    currentInput += number;
}

export function setOperation(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

export function calculate() {
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

export function clear() {
    currentInput = '';
    previousInput = '';
    operator = '';
}

export function getCurrentInput() {
    return currentInput;
}



export function backspace() {
    currentInput = currentInput.slice(0, -1);
}

