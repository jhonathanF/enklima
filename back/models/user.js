global.mongoose = require('mongoose');
module.export = class User extends global.mongoose.Model {
    constructor() {
        super();
    }

    verifyLogin(username, password) {

    }
}