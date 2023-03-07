const express = require('express');
const app = express();
const port = process.env.PORT || 5002;

app.use(express.static('server/public'));

app.use(express.json());

app.listen(port, () => {
    console.log(`server running on: ${port}`);
  }); 

app.use(express.json());

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  let answer = Number(sum);
  return answer;

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

let equations = [
  {
    firstNumber: 1,
    operation: '+',
    secondNumber: 2,
    answer: 3,
  }
];

app.get('/math', (req, res) => {
  if(equations.operation === '+') {
    addNumbers(equations.firstNumber, equations.secondNumber);
  } else if (equations.operation === '-') {
    subtractNumbers(equations.firstNumber, equations.secondNumber)
  } else if (equations.operation === '*') {
    multiplyNumbers(equations.firstNumber, equations.secondNumber)  
  } else (equations.operation === '/'); {
    divideNumbers(equations.firstNumber, equations.secondNumber)
  }
  res.send(equations);
});

app.post('/math', (req, res) => {
  let equationsToAdd = req.body;
  equations.push(equationsToAdd);
  res.sendStatus(201);
})