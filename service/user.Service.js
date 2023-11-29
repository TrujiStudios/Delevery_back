const jwt = require('jsonwebtoken');

const User = require('../database/models/user.Model');
const Role = require('../database/models/role.Model');
const storage = require('../utils/cloud_storage');
const { verifyToken } = require('../middleware/authValidation');

// const {Role : roleModel} = require('../database/models/role.Model');

class UserService {
    constructor() {
        // const User = new User();
        this.user = User;
    }
    async getAllUsers() {
        const users = await this.user.getAll();
        return users;
    }
    //TODO : FALTA VALIDAR LOS DATOS DE REGISTRO DE USUARIO
    async createUser(data) {
        const user = await this.user.create(data);
        await Role.create(user.id, 1);
        if (!user) throw new Error('Error al crear usuariooo');
        return user;
    }

    async updateWithimages(user, files) {

        await this.user.findByUserId(user.id);

        if (files.length > 0) {
            const pathImage = `images_${Date.now()}`
            const url = await storage(files[0], pathImage, null)
            if (url != undefined || url != null) {
                user.image = url
            }
        }
        const results = await this.user.update(user);
        return results;
    }

    async findByUserId(idUser, user) {
        await this.user.findByUserId(idUser);
        if (user.id === idUser) {
            const result = await this.user.findByUserId(idUser);
            return result;
        }
        throw new Error('Error al obtener usuario');
    }







}

module.exports = UserService;