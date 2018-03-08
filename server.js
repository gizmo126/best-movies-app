// This is added so Heroku stops complaining

var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/source'));
app.set('port', process.env.PORT || 8082);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

var server = app.listen(app.get('port'), function () {
    console.log('listening on port ', server.address().port);
});
/*
const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT ? process.env.PORT : 8181;
const dist = path.join(__dirname, 'source');

app.use(express.static(dist));

app.get('*', (req, res) => {
  res.sendFile(path.join(dist, 'html/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  }
  console.info('Express is listening on port %s.', port); // eslint-disable-line no-console
});
*/