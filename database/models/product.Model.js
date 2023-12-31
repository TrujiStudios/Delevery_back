const db = require('../db');

const Product = {};


Product.findByCategory = (category_id) => {
    const sql = `
    SELECT 
P.id,
P.name,
P.description,
P.price,
P.image1,
P.image2, 
P.image3, 
P.category_id 
FROM
 products AS P 
INNER JOIN categories AS C ON P.category_id = C.id WHERE C.id = $1
    `;
    return db.manyOrNone(sql, [category_id]);

};


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
            product.idCategori
        ]);
};


Product.update = (product) => {
    const sql = `
        UPDATE products SET
            name=$2,
            description=$3,
            price=$4,
            image1=$5,
            image2=$6,
            image3=$7,
            category_id=$8
        WHERE
            id=$1
    `;
    return db.none(sql,
        [
            product.id,
            product.name,
            product.description,
            product.price,
            product.image1,
            product.image2,
            product.image3,
            product.idCategori
        ]);
};

module.exports = Product;