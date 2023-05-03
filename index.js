const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Olá, mundo!</h1>');
});

app.get('/rota1', (req, res) => {
  res.send('<h1>Esta é a rota 1!</h1>');
});

app.get('/rota2', (req, res) => {
  res.send('<h1>Esta é a rota 2!</h1>');
});

app.get('/rota3', (req, res) => {
  res.send('<h1>Esta é a rota 3!</h1>');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});
