var express = require('express')
    , router = express.Router();
import UserRepo from '../repositories/userRepo.js';
import UserModel from '../models/user'
const JWT = require('jsonwebtoken');

router.post('/', function (req, res) {
    const userModel = new UserModel();
    userModel.validate
    res.send('Logged')
})

app.post('/login', async function (req, res) {
    const user = await UserRepo.findByName(req.body.username);
    if (!user) {
        return res.status(500).send('Login inválido!');
    }
    if (!UserRepo.validatePassword(req.body.password, user[0].password)) {
        return res.status(500).send('Login inválido!');
    }
    var token = JWT.sign({ id: user[0].id }, process.env.JWT_SECRET, {
        expiresIn: 300 // expires in 5min
    });
    return res.status(200).send({ auth: true, token: token });
}
);

module.exports = router;