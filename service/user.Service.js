const User = require('../database/models/user.Model');
const Role = require('../database/models/role.Model');
// const {Role : roleModel} = require('../database/models/role.Model');


class UserService {
    constructor() {
        // const User = new User();
        this.user = User;
    }
    async getAllUsers(){
        const users = await this.user.getAll();
        return users;
    }
    //TODO : FALTA VALIDAR LOS DATOS DE REGISTRO DE USUARIO
    async createUser(data){
        const user = await this.user.create(data);
        await Role.create(user.id, 1);
        if(!user) throw new Error('Error al crear usuariooo');
        return user;
    }
}

module.exports = UserService;