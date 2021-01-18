var express = require("express");
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/hello.html'))

});

app.get('/HackDavis.JPG', function (req, res) {
    res.sendFile(path.join(__dirname + '/HackDavis.JPG'))

});
app.listen(3000);
console.log('Express server started');
