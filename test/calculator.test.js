import {
    appendNumber,
    setOperation,
    calculate,
    clear,
    backspace,
    getCurrentInput
} from '../src/calculator.js';


describe('Kalkulator - podstawowe operacje', () => {
    beforeEach(() => {
        clear();
    });

    test('dodawanie 2 + 3 = 5', () => {
        appendNumber('2');
        setOperation('+');
        appendNumber('3');
        calculate();
        expect(getCurrentInput()).toBe('5');
    });

    test('odejmowanie 5 - 2 = 3', () => {
        appendNumber('5');
        setOperation('-');
        appendNumber('2');
        calculate();
        expect(getCurrentInput()).toBe('3');
    });

    test('mnożenie 4 * 2 = 8', () => {
        appendNumber('4');
        setOperation('*');
        appendNumber('2');
        calculate();
        expect(getCurrentInput()).toBe('8');
    });

    test('dzielenie 10 / 2 = 5', () => {
        appendNumber('10');
        setOperation('/');
        appendNumber('2');
        calculate();
        expect(getCurrentInput()).toBe('5');
    });

    test('dzielenie przez 0 rzuca wyjątek', () => {
        appendNumber('10');
        setOperation('/');
        appendNumber('0');
        expect(() => calculate()).toThrow("Nie dziel przez 0!");
    });

    test('clear() resetuje wszystkie wartości', () => {
        appendNumber('9');
        setOperation('+');
        appendNumber('1');
        clear();

        expect(getCurrentInput()).toBe('');

        // Jeśli chcesz testować zmienne wewnętrzne bezpośrednio:
        const calc = require('../src/calculator');
        expect(calc.previousInput).toBe('');
        expect(calc.operator).toBe('');
    });

    test('setOperation() ustawia operator i przygotowuje do obliczeń', () => {
        clear(); // zawsze!

        appendNumber('2');
        setOperation('+');
        appendNumber('3');
        calculate();

        expect(getCurrentInput()).toBe('5');
    });

    test('appendNumber() dodaje cyfry do currentInput', () => {

        clear();

        appendNumber('4');
        appendNumber('2');

        expect(getCurrentInput()).toBe('42');
    });

    test('backspace() usuwa ostatnią cyfrę z currentInput', () => {
        clear();
        appendNumber('1');
        appendNumber('2');
        appendNumber('3');
        backspace();

        expect(getCurrentInput()).toBe('12');

        backspace();
        expect(getCurrentInput()).toBe('1');

        backspace();
        expect(getCurrentInput()).toBe('');

        backspace(); // próba usunięcia z pustego
        expect(getCurrentInput()).toBe('');
    });


});
