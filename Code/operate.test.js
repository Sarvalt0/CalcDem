const operate = require('./operate');

test('dodawanie 2 + 2 = 4', () => {
    expect(operate(2, 2, '+')).toBe(4);
});

test('odejmowanie 10 - 4 = 6', () => {
    expect(operate(10, 4, '-')).toBe(6);
});

test('mnożenie 3 * 3 = 9', () => {
    expect(operate(3, 3, '*')).toBe(9);
});

test('dzielenie 8 / 2 = 4', () => {
    expect(operate(8, 2, '/')).toBe(4);
});

test('dzielenie przez 0', () => {
    expect(operate(5, 0, '/')).toBe("Nie dziel przez 0!");
});
