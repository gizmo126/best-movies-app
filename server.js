// This is added so Heroku stops complaining
/*
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {

}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
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
