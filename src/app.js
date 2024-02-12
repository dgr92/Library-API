const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');

const bookRouter = require('./router/router');

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(cors());

server.get('/', (_req, res) => {
  res.status(200).send({
    status: 'OK',
    message: 'Main page',
  });
});

server.use(bookRouter);

server.use((_req, res, next) => {
  res.status(404).send({
    status: 'Error 404.',
    message: 'Page not found.',
  });
  next();
});

server.use((err, _req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send({
    status: status,
    message: message,
    stack: err.stack,
  });
});

module.exports = server;
