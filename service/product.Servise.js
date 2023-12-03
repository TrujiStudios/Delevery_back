const Product = require('../database/models/product.Model');

class ProductService {
    constructor() {
        this.product = Product;
    }

    async create(product) {
        const result = await this.product.create(product);
        return result;
    }
}

module.exports = ProductService;