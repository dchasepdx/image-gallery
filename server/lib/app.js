const express = require('express');
const app = express();
const errorHandler = require('./error-handler');
const morgan = require('morgan');
const path = require('path');
const pubDir = path.join(__dirname, './public');

const images = require('./routes/images');

app.use(morgan('dev'));
app.use('/', express.static(pubDir));
app.use((req, res, next) => {
  const url = '*';
  res.header('Access-Control-Allow-Origin', url);
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/images', images);

module.exports = app;