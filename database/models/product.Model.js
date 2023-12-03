const db = require('../db');

const Product = {};

// find create
Product.create = (product) => {
    const sql = `
        INSERT INTO
        products(
                name,
                description,
                price,
                image1,
                image2,
                image3,
                category_id
            )
        VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id
    `;
    return db.oneOrNone(sql, 
        [
            product.name,
            product.description,
            product.price,
            product.image1,
            product.image2,
            product.image3,
            product.category_id
        ]);
};

module.exports = Product;