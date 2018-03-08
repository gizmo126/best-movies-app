// This is added so Heroku stops complaining
// had to make server.js and webpack run on different ports but simultaneously
// then configure Procfile to run both in Heroku
var path = require('path');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});