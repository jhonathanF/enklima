var express = require('express')
  , router = express.Router()

const UserRepo = require('../repositories/userRepo');

  router.use('/user', require('./userController'))

router.get('/', function (req, res) {
  res.send('Home page')
})

router.get('/about', function (req, res) {
  res.send('Learn about us')
})

router.get('/teste', function (req, res) {
  const userR = new UserRepo();
  userR.teste();
  res.send('Learn about us')
})

module.exports = router