const express = require('express');
const path = require('path');
const app = express();

// app.get('/', function (req: any, res: any) {
//   res.send('Hello World in the butt');
// });

require('./config/routes')(app);

app.use(express.static('client'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(8080);
