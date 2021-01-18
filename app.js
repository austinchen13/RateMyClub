var express = require("express");
var path = require('path');
var app = express();
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/hello.html'))

});

app.get('/HackDavis.JPG', function (req, res) {
    res.sendFile(path.join(__dirname + '/HackDavis.JPG'))

});

app.get('/Exercise_Club.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/Exercise_Club.html'))

});

app.get('/Football_Club.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/Football_Club.html'))

});

app.get('/Friends_Club.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/Friends_Club.html'))

});

app.get('/Moneyball-Club.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/Moneyball-Club.html'))

});
app.listen(3000);
console.log('Express server started');
