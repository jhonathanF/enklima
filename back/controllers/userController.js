var express = require('express')
    ,
    router = express.Router();
import UserRepo from '../repositories/userRepo.js';
var sha1 = require('sha1');
const JWT = require('jsonwebtoken');

router.post('/', async function (req, res) {
    let user = req.body;
    user.password = sha1(user.password)
    const userModel = UserRepo.getUserModel(user);
    const newUser = await userModel.save();
    res.send(newUser)
})

app.post('/login', async function (req, res) {
    const user = await UserRepo.findByName(req.body.username);
    if (!user || user.length <= 0) {
        console.log('Login invalido');
        return res.status(500).send('Login inválido!');
    }
    if (!UserRepo.validatePassword(req.body.password, user[0].password)) {
        console.log('Login invalido');
        return res.status(500).send('Login inválido!');
    }
    var token = JWT.sign({ id: user[0].id }, process.env.JWT_SECRET, {
        expiresIn: 300000000 // expires in 5min
    });
    return res.status(200).send({
        auth: true,
        token: token,
        name: user[0].name,
        age: user[0].age,
        rank: user[0].rank,
        isAdmin: user[0].isAdmin
    });
}
);

module.exports = router;