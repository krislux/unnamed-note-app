const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors({
    //origin: 'http://localhost:5173'
}));

require('./config/routes')(app);

app.use(express.static('client/dist'));
// app.get('*', (req, res) => {
//   res.send("Test");
//   // res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.listen(8080);
