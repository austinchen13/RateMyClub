var express = require("express");
var path = require('path');
var app = express();
app.use(express.static(‘/‘))
app.listen(3000);
console.log('Express server started');
