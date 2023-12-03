const Product = require('../database/models/product.Model');
const UserService = require('../service/user.Service');
const categoryService = require('./Category.Service');

class ProductService {
    constructor() {
        this.product = Product;
        this.userServ = new UserService();
        this.categoryServ = new categoryService();

    }

    async createCategory(data, idUser, userId) {

        await this.userServ.findByUserId(idUser, userId);
        await this.categoryServ.findByCategoryId(data.category_id, idUser, userId);
        
        const result = await this.product.create(data);
        return result;
    }
}

module.exports = ProductService;