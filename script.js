let display = document.getElementById('display');
let currentInput = "";
let operators = ["+", "-", "X", "/"];
let firstValue = "";
let secondValue = "";
let usedOperator = "";

function cancell() {
    currentInput = '';
    updateDisplay();
}

function addNumber(number) {
    currentInput += `${number}`;
    updateDisplay();
}

function operationSwitch(operand1, operand2, operator) {
    switch (operator) {
        case "+":
            return ` = ${parseFloat(operand1) + parseFloat(operand2)}`;

        case "-":
            return ` = ${parseFloat(operand1) - parseFloat(operand2)}`;

        case "X":
            return ` = ${parseFloat(operand1) * parseFloat(operand2)}`;

        case "/":
            return ` = ${parseFloat(operand1) / parseFloat(operand2)}`;
    }
}

function addOperator(operator) {
    let lastCharacter = currentInput.slice(-1)[0];
    for (let i = 0; i < operators.length; i++) {
        if (lastCharacter == operators[i]) {
            currentInput = currentInput.slice(0, currentInput.length - 1);
            break;
        }
    }
    // if (operators.includes(lastCharacter)) {
    //     currentInput = currentInput.slice(0, currentInput.length - 1);
    // }
    currentInput += ` ${operator} `;
    usedOperator = operator;

    // for (let i = 0; i < currentInput.length; i++) {
    //     if (currentInput[i] == usedOperator) {
    //         firstValue = currentInput.slice(0, i);
    //         secondValue = currentInput.slice(i + 1, currentInput.length - 1);
    //     }
    // }
    // currentInput = `${firstValue}${usedOperator}${secondValue}`;

    // currentInput = operationSwitch(firstValue, secondValue, usedOperator);

    updateDisplay();
}

function result() {
    for (let i = 0; i < currentInput.length; i++) {
        if (currentInput[i] == usedOperator) {
            firstValue = currentInput.slice(0, i);
            secondValue = currentInput.slice(i + 1, currentInput.length);
        }
    }
    currentInput = `${firstValue}${usedOperator}${secondValue}`;
    currentInput = operationSwitch(firstValue, secondValue, usedOperator);
    updateDisplay();
}

function addFullStop(stop) {
    if (currentInput.slice(-1) !== "." && currentInput.length !== 0) {
        currentInput += stop;
        updateDisplay()
    }
}

function updateDisplay() {
    display.value = currentInput;
}




