const { response } = require("express");

console.log('Yo waddup');

const num1 = document.querySelector('#firstNumber').value;
const num2 = document.querySelector('#secondNumber').value;

function addNumbers(num1, num2) {
    let sum = num1 + num2
    return sum;
}
console.log(addNumbers(2,3));

function getMatch() {
    axios.get('/math').then((response) => {
        console.log(response);
        let equationsFromServer = response.data;
        let contentDiv = document.querySelector('#outputDid');
        contentDiv.innerHTML = '';
        for(let equation of equationsFromServer) {
            contentDiv.innerHTML += `
            
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong');
    })
}

function submitEquation(event) {
    event.preventDefault();
    console.log('Successful submission');
    let addSymbol = document.querySelector('#addButton');
    let subtractSymbol = document.querySelector('#subtractButton');
    let multiplySymbol = document.querySelector('#multiplyButton');
    let divideSymbol = document.querySelector('#divideButton');
    let equationsForServer = {
        firstNumber: num1,
        operatorSymbol: addSymbol || subtractSymbol || multiplySymbol || divideSymbol,
        secondNumber: num2,
        answer: answer,
    };
    axios.post('/math', equationsForServer).then((response) => {
        console.log(response);
        getMath();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    });
}
console.log(submitEquation());