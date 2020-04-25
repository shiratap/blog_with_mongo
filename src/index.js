const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

module.exports = app;
