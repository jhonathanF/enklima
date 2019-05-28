var express = require('express');
global.app = express();

global.app.use(require('./controllers'))

global.app.listen(3000, function () {
    console.log('APP is listening on port 3000!');
});
