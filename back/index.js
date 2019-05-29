var express = require('express');
global.app = express();
var moongoose = require('moongoose');
moongoose.connect('mongodb://localhost:27017/test');
global.app.use(require('./controllers'))

global.app.listen(3000, function () {
    console.log('APP is listening on port 3000!');
});
