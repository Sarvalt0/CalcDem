// ui.js
import {
    appendNumber,
    setOperation,
    calculate,
    clear,
    backspace,
    getCurrentInput,
    history
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
        window._opPressed = true;
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
    updateHistoryPanel();
});

document.getElementById('clear').addEventListener('click', () => {
    if (getCurrentInput() === '666' && !window._opPressed) {
        document.querySelector('.calculator').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
        document.getElementById('welcome').classList.add('zoom-in');

        setTimeout(() => {
            document.getElementById('welcome').style.top = '10%';
            document.getElementById('welcome').style.transform = 'translateX(-50%)';
            const chat = document.getElementById('chat-container');
            chat.style.display = 'flex';
            chat.classList.add('fade-in');

        }, 5000);

        return;
    }

    window._opPressed = false;
    clear();
    updateDisplay();
});

document.getElementById('backspace').addEventListener('click', () => {
    backspace();
    updateDisplay();
});
document.querySelector('[data-action="history"]').addEventListener('click', () => {
    toggleHistoryPanel();
});
const chatText = document.getElementById('chat-text');
const sendBtn = document.getElementById('send-btn');
function toggleHistoryPanel() {
    const panel = document.getElementById('history-panel');
    panel.classList.toggle('hidden');
}
const chatMessages = document.getElementById('chat-messages');

sendBtn.addEventListener('click', () => {
    const msg = chatText.value.trim();
    if (msg) {
        const bubble = document.createElement('div');
        bubble.classList.add('message');
        bubble.innerText = msg;
        chatMessages.appendChild(bubble);
        chatText.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
function updateHistoryPanel() {
    const list = document.getElementById('history-list');
    list.innerHTML = ''; // Czyścimy starą zawartość

    history.slice().reverse().forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        list.appendChild(li);
    });
}