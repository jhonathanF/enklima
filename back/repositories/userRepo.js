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
}