let currentInput = '';
let previousInput = '';
let operator = '';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('num-btn')) {
            handleNumber(value);
        } else if (button.classList.contains('operator-btn')) {
            handleOperator(value);
        } else if (button.classList.contains('equals-btn')) {
            handleEquals();
        } else if (button.classList.contains('clear-btn')) {
            handleClear();
        }
        
        updateDisplay();
    });
});

function handleNumber(num) {
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
}

function handleOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        handleEquals();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function handleEquals() {
    if (previousInput === '' || currentInput === '') return;
    
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    switch(operator) {
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
                alert('Cannot divide by zero!');
                handleClear();
                return;
            }
            result = prev / current;
            break;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
}

function handleClear() {
    currentInput = '';
    previousInput = '';
    operator = '';
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}