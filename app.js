

const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 8000;
const registers = require('./registers.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello world");
});
app.get('/registers', (req, res) => {
  res.json(registers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
