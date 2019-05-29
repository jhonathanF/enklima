import { UserModel } from '../models/user';
import { mongoose } from 'mongoose';

module.export = class UserRepo {

    constructor() {
        const schema = mongoose.Schema({
            id: Number,
            name: String,
            rank: String,
            age: Number,
        });
        this.model = mongoose.model(UserModel, schema, 'user');
    }

    teste() {
        this.model.save({
            id: 1,
            name: 'ef',
            rank: 'few',
            age: 13
        })
            .then(d => console.log(d.ops[0]), console.log);
    }
}