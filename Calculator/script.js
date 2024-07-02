// script.js
function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function backspace() {
    let display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1);
}
