const express = require('express');
const path = require('path');
const app = express();

require('./config/routes')(app);

app.use(express.static('client/dist'));
// app.get('*', (req, res) => {
//   res.send("Test");
//   // res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.listen(8080);
