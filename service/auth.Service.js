const crypto = require('crypto');
const User = require('../database/models/user.Model');


class authService{

    constructor(){

    }

    async login(req,res){

    }

    async signup(data){
        console.log("signup <> ", data);
        const results = await User.create(data);
        return results;        

    }

}
module.exports = authService;