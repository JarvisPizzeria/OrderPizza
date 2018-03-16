var express = require('express');
var app = express();
var request = require('request');

app.use(express.static('public'));
app.use(express.static('web'));
app.use('/bower_components', express.static('bower_components'));

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});
