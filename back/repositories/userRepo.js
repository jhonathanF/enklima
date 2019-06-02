import { User } from '../models/user';
global.mongoose = require('mongoose');
var sha1 = require('sha1');
var autoIncrement = require('mongoose-auto-increment');

class UserRepo {
    constructor() {
        this.schema = global.mongoose.Schema({
            name: {
                type: String,
                required: [true, 'Name is Required'],
            },
            rank: String,
            age: Number,
            registrationId: Number,
            password: String,
            isAdmin: Boolean
        });
        this.schema.plugin(autoIncrement.plugin, 'user');
        this.model = new global.mongoose.model('user', this.schema);
    }

    getUserModel(properties) {
        return this.model(properties);
    }

    getUserModelErrors(user) {
        return user.validateSync();
    }

    save(user) {
        return user.save();
    }

    findByName(name) {
        return this.model.find({ 'name': name });
    }

    validatePassword(rawPass, encryptedPass) {
       return sha1(rawPass) === encryptedPass;
    }

}

export default new UserRepo();