const express = require('express');
const cors = require('cors');
const path = require('path');
const createError = require('http-errors');

const livroRouter = require('./routes/livros');

const app = express();

app.use(cors());
app.set('port', process.env.PORT || '3030');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/livros', livroRouter);

app.get('/', (req, res) => {
  res.send('Servidor Expres funcionando!');
});

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('Erro no servidor');
});

module.exports = app;