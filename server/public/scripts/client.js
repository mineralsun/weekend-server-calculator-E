console.log('Yo waddup');

const num1 = document.querySelector('#firstNumber').value;
const num2 = document.querySelector('#secondNumber').value;

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
};
console.log(addNumbers(2,3));

function subtractNumbers(num1, num2) {
    let sum = num1 - num2;
    return sum;
};
console.log(subtractNumbers(5,4));

function multiplyNumbers(num1, num2) {
    let sum = num1 * num2;
    return sum;
};
console.log(multiplyNumbers(5,3));

function divideNumbers(num1, num2) {
    let sum = num1 / num2;
    return sum;
};
console.log(divideNumbers(8,2));



function getMath() {
    axios.get('/math').then((response) => {
        console.log(response);
        let equationsFromServer = response.data;
        let contentDiv = document.querySelector('#outputDid');
        contentDiv.innerHTML = '';
        for(let equations of equationsFromServer) {
            contentDiv.innerHTML += `
            <p>${equations.firstNumber} ${equations.operatorSymbol} ${equations.secondNumber} = ${equations.answer}
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong');
    })
};

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