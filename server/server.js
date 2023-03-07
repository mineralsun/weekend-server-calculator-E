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
    let answer = num1 + num2
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
  // {
  //   firstNumber: 1,
  //   operation: '+',
  //   secondNumber: 2,
  //   answer: 3
  // }
];

app.get('/math', (req, res) => {
  res.send(equations);
});

app.post('/math', (req, res) => {
  let equationsToAdd = req.body;
  console.log(equationsToAdd);
    if(equationsToAdd.operation === '+') {
    console.log('add', equationsToAdd.operation);  
    equationsToAdd.answer = addNumbers(equationsToAdd.firstNumber, equationsToAdd.secondNumber);
  } else if (equationsToAdd.operation === '-') {
    console.log('subtract', equationsToAdd.operation); 
    equationsToAdd.answer = subtractNumbers(equationsToAdd.firstNumber, equationsToAdd.secondNumber)
  } else if (equationsToAdd.operation === '*') {
    console.log('multiply', equationsToAdd.operation); 
    equationsToAdd.answer = multiplyNumbers(equationsToAdd.firstNumber, equationsToAdd.secondNumber)  
  } else if (equationsToAdd.operation === '/') {
    console.log('divide', equationsToAdd.operation); 
    equationsToAdd.answer = divideNumbers(equationsToAdd.firstNumber, equationsToAdd.secondNumber)
  }
  equations.push(equationsToAdd);
  res.sendStatus(201);
})