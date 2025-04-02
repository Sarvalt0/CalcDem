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

// DOM Elements
const elements = {
    display: document.getElementById('display'),
    calculator: document.querySelector('.calculator'),
    welcome: document.getElementById('welcome'),
    chatContainer: document.getElementById('chat-container'),
    chatMessages: document.getElementById('chat-messages'),
    chatText: document.getElementById('chat-text'),
    sendBtn: document.getElementById('send-btn'),
    historyPanel: document.getElementById('history-panel'),
    historyList: document.getElementById('history-list'),
    exportPdfBtn: document.getElementById('export-pdf')
};

// State
const state = {
    opPressed: false
};

// Display Functions
function updateDisplay() {
    elements.display.value = getCurrentInput();
}

function updateHistoryPanel() {
    elements.historyList.innerHTML = '';
    history.slice().reverse().forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        elements.historyList.appendChild(li);
    });
}

function toggleHistoryPanel() {
    elements.historyPanel.classList.toggle('hidden');
}

// Calculator Event Handlers
function handleNumberClick(btn) {
    appendNumber(btn.textContent);
    updateDisplay();
}

function handleOperatorClick(btn) {
    state.opPressed = true;
    setOperation(btn.textContent);
    updateDisplay();
}

function handleEqualsClick() {
    try {
        calculate();
        updateDisplay();
        updateHistoryPanel();
    } catch (e) {
        elements.display.value = e.message;
    }
}

function handleClearClick() {
    if (getCurrentInput() === '666' && !state.opPressed) {
        showEasterEgg();
        return;
    }

    state.opPressed = false;
    clear();
    updateDisplay();
}

function handleBackspaceClick() {
    backspace();
    updateDisplay();
}

// Easter Egg Function
function showEasterEgg() {
    elements.calculator.style.display = 'none';
    elements.welcome.style.display = 'block';
    elements.welcome.classList.add('zoom-in');

    setTimeout(() => {
        elements.welcome.style.top = '10%';
        elements.welcome.style.transform = 'translateX(-50%)';
        elements.chatContainer.style.display = 'flex';
        elements.chatContainer.classList.add('fade-in');
    }, 5000);
}

// Chat Functions
function handleSendMessage() {
    const msg = elements.chatText.value.trim();
    if (!msg) return;

    const bubble = document.createElement('div');
    bubble.classList.add('message');
    bubble.innerText = msg;
    elements.chatMessages.appendChild(bubble);
    elements.chatText.value = '';
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

// PDF Export
function exportToPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Historia obliczeń", 10, 10);
    doc.setFontSize(12);

    let yPosition = 20;
    history.forEach((entry, index) => {
        if (yPosition > 280) {
            doc.addPage();
            yPosition = 10;
        }
        doc.text(`${index + 1}. ${entry}`, 10, yPosition);
        yPosition += 10;
    });

    doc.save('historia-kalkulatora.pdf');
}

// Event Listeners
function initializeEventListeners() {
    // Calculator buttons
    document.querySelectorAll('[data-number]').forEach(btn => {
        btn.addEventListener('click', () => handleNumberClick(btn));
    });

    document.querySelectorAll('[data-operator]').forEach(btn => {
        btn.addEventListener('click', () => handleOperatorClick(btn));
    });

    document.getElementById('equals').addEventListener('click', handleEqualsClick);
    document.getElementById('clear').addEventListener('click', handleClearClick);
    document.getElementById('backspace').addEventListener('click', handleBackspaceClick);
    document.querySelector('[data-action="history"]').addEventListener('click', toggleHistoryPanel);

    // Chat
    elements.sendBtn.addEventListener('click', handleSendMessage);

    // PDF Export
    elements.exportPdfBtn.addEventListener('click', exportToPDF);
}

// Initialize the app
initializeEventListeners();