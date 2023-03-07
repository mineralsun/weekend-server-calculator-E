console.log('Yo waddup');

const num1 = document.querySelector('#firstNumber').value;
const num2 = document.querySelector('#secondNumber').value;

let operation = '';

function addButton(event) {
    operation = '+';
}

function subtractButton(event) {
    operation = '-';
}

function multiplyButton(event) {
    operation = '*';
}

function divideButton(event) {
    operation = '/';
}

// function addNumbers(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// };
// console.log(addNumbers(2,3));

// function subtractNumbers(num1, num2) {
//     let sum = num1 - num2;
//     return sum;
// };
// console.log(subtractNumbers(5,4));

// function multiplyNumbers(num1, num2) {
//     let sum = num1 * num2;
//     return sum;
// };
// console.log(multiplyNumbers(5,3));

// function divideNumbers(num1, num2) {
//     let sum = num1 / num2;
//     return sum;
// };
// console.log(divideNumbers(8,2));


function getMath() {
    axios.get('/math').then((response) => {
        console.log(response);
        let equationsFromServer = response.data;
        let contentDiv = document.querySelector('#outputDiv');
        contentDiv.innerHTML = '';
        for(let equations of equationsFromServer) {
            contentDiv.innerHTML += `
            <p>${equations.firstNumber} ${equations.operation} ${equations.secondNumber} = ${equations.answer}
            `;
        }
        let result = document.querySelector('#resultDiv');
            result.innerHTML = '';
            for(let equations of equationsFromServer)
            result.innerHTML += `
            <h3> ${equations.answer} </h3>
            `;
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong');
    })
};
getMath();

function submitEquation(event) {
    event.preventDefault();
    console.log('Successful submission');
    const num1 = document.querySelector('#firstNumber').value;
    const num2 = document.querySelector('#secondNumber').value;
   // const answer = addButton(event.answer)
    let equationsForServer = {
        firstNumber: Number(num1),
        operation: operation,
        secondNumber: Number(num2),
    };
    axios.post('/math', equationsForServer).then((response) => {
        console.log(equationsForServer);
        console.log(response);
        getMath();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong')
    });
}

function clearInput(event) {
    const num1 = document.querySelector('#firstNumber').value = ''
    const num2 = document.querySelector('#secondNumber').value = ''
}