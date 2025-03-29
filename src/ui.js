// ui.js
import {
    appendNumber,
    setOperation,
    calculate,
    clear,
    backspace,
    getCurrentInput
} from './calculator.js';

function updateDisplay() {
    document.getElementById('display').value = getCurrentInput();
}

document.querySelectorAll('[data-number]').forEach(btn =>
    btn.addEventListener('click', () => {
        appendNumber(btn.textContent);
        updateDisplay();
    })
);

document.querySelectorAll('[data-operator]').forEach(btn =>
    btn.addEventListener('click', () => {
        setOperation(btn.textContent);
        updateDisplay();
    })
);

document.getElementById('equals').addEventListener('click', () => {
    try {
        calculate();
    } catch (e) {
        document.getElementById('display').value = e.message;
        return;
    }
    updateDisplay();
});

document.getElementById('clear').addEventListener('click', () => {
    clear();
    updateDisplay();
});

document.getElementById('backspace').addEventListener('click', () => {
    backspace();
    updateDisplay();
});