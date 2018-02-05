'use strict';

const express = require('express');
const path = require('path');
require('dotenv').config()
const app = express();
const port = Number(process.env.PORT || 7685);
const http = require('http').Server(app);
const api = require('./apiwang.js');
const helmet = require('helmet');
const compression = require('compression')

app.use(express.static(path.join(__dirname, 'client')));

app.use(compression());
app.use(helmet());

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

// Route API calls to the api
app.use('/check/:number', api);

// Start skynet
http.listen(port, () => {
	console.log('Listening on: ' + port);
});

module.exports = app;
