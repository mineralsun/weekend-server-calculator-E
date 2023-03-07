console.log('Yo waddup');

const num1 = document.querySelector('#firstNumber').value;
const num2 = document.querySelector('#secondNumber').value;

//This global variable allows me to set which function I am referencing
// by the click of a specific matching button!
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

//This function gets my math by request from the server.
// This will append any old function and newer functions
// to the DOM using the response of the GET request.
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


//This function is called by hitting the equals button
//This posts new math to the server, and then calls
// the GET request to display the new function and the
// older functions as well!
function submitEquation(event) {
    event.preventDefault();
    console.log('Successful submission');
    const num1 = document.querySelector('#firstNumber').value;
    const num2 = document.querySelector('#secondNumber').value;
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

//This function resets the value of my input fields
// to an empty string!
function clearInput(event) {
    const num1 = document.querySelector('#firstNumber').value = ''
    const num2 = document.querySelector('#secondNumber').value = ''
}