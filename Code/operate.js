function operate(a, b, operator) {
    if (operator === '/' && b === 0) {
        return "Nie dziel przez 0!";
    }

    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return null;
    }
}

module.exports = operate;
