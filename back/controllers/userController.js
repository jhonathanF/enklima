var express = require('express')
    , router = express.Router()

router.get('/login', function (req, res) {
    res.send('Logged')
})

module.exports = router;