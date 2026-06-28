const numberInput = document.getElementById('number-input');
const addNumberButton = document.getElementById('add-number');
const generateRandomButton = document.getElementById('generate-random');
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
    for (const number of numberList) {
        if (Math.random() < 1 / number) {
            points += number;
        }
    }
    document.getElementById('points').textContent = points;
    document.getElementById('numbers').textContent = numberList.length;
});