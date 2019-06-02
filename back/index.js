const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors')
const autoIncrement = require('mongoose-auto-increment');


global.app = express();
global.mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

global.mongoose.connect('mongodb://localhost/aula', { useNewUrlParser: true }, function (err) {
  if (err) throw err;
  console.log('Banco conectado com sucesso!');
});

autoIncrement.initialize(global.mongoose.connections[0]);

global.app.use(require('./controllers'))

//here is the magic
app.use(cors());

global.app.listen(3000, async function () {
  const migration = require('./migration/migration')
  // await migration();
  console.log('APP is listening on port 3000!');
});
