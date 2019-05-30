const express = require('express');
const bodyParser = require('body-parser');
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

global.app.listen(3000, function () {
    console.log('APP is listening on port 3000!');
});
