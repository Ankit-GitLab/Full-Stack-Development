let currentInput = '';
let previousInput = '';
let operation = undefined;

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

function appendNumber(number) {
  if (currentInput.length < 16) {
    currentInput += number;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = undefined;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
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
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = undefined;
  previousInput = '';
  updateDisplay();
}