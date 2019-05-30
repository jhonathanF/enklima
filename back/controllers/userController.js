var express = require('express')
    , router = express.Router()
import UserRepo from '../repositories/userRepo.js';

router.post('/', function (req, res) {

    
    res.send('Logged')
})

module.exports = router;