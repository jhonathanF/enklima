var express = require('express')
  , router = express.Router()


router.use('/user', require('./userController'))
router.use('/incident', require('./incidentController'))

router.get('/', function (req, res) {
  res.send('API TA FUNFANDO')
})

module.exports = router