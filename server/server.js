const express = require('express');
const app = express();
const port = process.env.PORT || 5002;

app.use(express.static('server/public'));

app.use(express.json());

app.listen(port, () => {
    console.log(`server running on: ${port}`);
  }); 

app.use(express.json());

let equations = [];

app.get('/math', (req, res) => {
  res.send(equations);
});

app.post('/math', (req, res) => {
  let equationsToAdd = req.body;
  equations.push(equationsToAdd);
  res.sendStatus(201);
})