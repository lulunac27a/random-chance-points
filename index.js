const numberInput = document.getElementById('numberInput');
const addNumberButton = document.getElementById('addNumber');
const generateRandomButton = document.getElementById('generateRandom');
const numberList = [];
let points = 0;

addNumberButton.addEventListener('click', () => {
    const number = parseInt(numberInput.value, 10);
    if (!isNaN(number) && number > 1) {
        numberList.push(number);
        numberInput.value = '';
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