var express = require('express')
    , router = express.Router();
import UserRepo from '../repositories/userRepo.js';
import UserModel from '../models/user'
const JWT = require('jsonwebtoken');

router.post('/', function (req, res) {
    const userModel = new UserModel();
    res.send('Logged')
})

app.post('/login', async function (req, res) {
    const user = await UserRepo.findByName(req.body.username);
    if (!user) {
        res.status(500).send('Login inválido!');
    }

    if (!UserRepo.validatePassword(req.body.password, user.password)) {
        res.status(500).send('Login inválido!');
    }
    var token = JWT.sign({ id: user.id }, 'sdsd', {
        expiresIn: 300 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
}
);

module.exports = router;