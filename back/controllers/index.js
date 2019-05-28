var express = require('express')
  , router = express.Router()

router.use('/user', require('./userController'))

router.get('/', function(req, res) {
  res.send('Home page')
})

router.get('/about', function(req, res) {
  res.send('Learn about us')
})

module.exports = router