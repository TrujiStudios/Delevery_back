const db = require('../db');

const Category = {};

// find create
Category.create = (category) => {
    const sql = `
        INSERT INTO
        categories(
                name,
                description
            )
        VALUES($1, $2) RETURNING id
    `;
    return db.oneOrNone(sql, 
        [
            category.name,
            category.description
        ]);
};

module.exports = Category;