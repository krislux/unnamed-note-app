"use strict";
var express = require('express');
var path = require('path');
var app = express();
// app.get('/', function (req: any, res: any) {
//   res.send('Hello World in the butt');
// });
require('./config/routes')(app);
app.use(express.static('client'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.listen(8080);
