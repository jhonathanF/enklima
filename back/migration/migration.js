import UserRepo from '../repositories/userRepo.js';
var sha1 = require('sha1');
module.exports = function () {
    const firstAdmin = {
        name: 'jhonathan',
        password: sha1('abc'),
        isAdmin: true,
        age: 21,
        rank: 'Coronel'
    }

    const admin = UserRepo.getUserModel(firstAdmin);
    UserRepo.save(admin);
}