console.log('Yo waddup');

const num1 = document.querySelector('#firstNumber').value;
const num2 = document.querySelector('#secondNumber').value;

function addNumbers(num1, num2) {
    let sum = num1 + num2
    return sum;
}
console.log(addNumbers(2,3));

function submitEquation(event) {
    event.preventDefault();
    console.log('Successful submission');
}