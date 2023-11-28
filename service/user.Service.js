const User = require('../database/models/user.Model');
const Role = require('../database/models/role.Model');
const storage = require('../utils/cloud_storage');

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

    async updateWithimages(user, files) {
        if (files.length > 0) {
            const pathImage = `images_${Date.now()}`
            const url = await storage(files[0], pathImage, null)
            if (url != undefined || url != null) {
                user.image = url
            }
        }
        console.log(user)
        const results = await this.user.update(user);
        return results;
    }

    async findByUserId(idUser){
        const user = await this.user.findByUserId(idUser);
        return user;
    }
    
}

module.exports = UserService;