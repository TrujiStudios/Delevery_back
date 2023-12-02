'use strict';

const Category = require('../database/models/Category.Model');


class categoryService {
    constructor() {
        this.category = Category;
    }

    async categoresCreate(category) {
        try {
            const newCategory = await this.category.create(category);
            return newCategory;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = categoryService;