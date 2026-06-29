const numberInput = document.getElementById('number-input');
const addNumberButton = document.getElementById('add-number');
const generateRandomButton = document.getElementById('generate-random');
const numberTableBody = document.getElementById('number-table-body');
const pointsDisplay = document.getElementById('points');
const numbersDisplay = document.getElementById('numbers');
const numberList = [];
let points = 0;

addNumberButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value, 10);
    if (!Number.isNaN(number) && number >= 2 && Number.isFinite(number)) {
        numberList.push(number);
        numberInput.value = '';
    }
    else {
        alert('Please enter a valid number greater than or equal to 2.');
    }
});

generateRandomButton.addEventListener('click', () => {
    points = 0;
    numberTableBody.innerHTML = '';
    for (const number of numberList) {
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        const pointsCell = document.createElement('td');

        numberCell.textContent = number;
        row.appendChild(numberCell);
        row.appendChild(pointsCell);
        numberTableBody.appendChild(row);
        if (Math.random() < 1 / number) {
            points += number;
            pointsCell.textContent = number;
        }
        else {
            pointsCell.textContent = 0;
        }
    }
    pointsDisplay.textContent = points;
    numbersDisplay.textContent = numberList.length;
});