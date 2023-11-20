const User = require('../database/models/user.Model');


class UserService {
    constructor() {
        const User = new User();
        this.user = User;
    }
    async getAllUsers(){
        const users = await this.user.getAll();
        return users;
    }
}

module.exports = UserService;