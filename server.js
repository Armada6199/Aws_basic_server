'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('HELOO fROM AWS');
});

app.get('/:name', (req, res) => {
  let name = req.params.name;
  res.status(200).send(`HLA ${name}`);
});


app.listen(8080, () => console.log('Server Running on Port:8080'));