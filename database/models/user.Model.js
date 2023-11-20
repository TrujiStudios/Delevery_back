'use strict';

const db = require('../db');

const User = {};

// find user
User.getAll = () => {
    const sql = `
        SELECT * FROM users
    `;
    return db.manyOrNone(sql);
};

// create users
User.create = (user) => {
    const sql = `
        INSERT INTO
            users(
                name,
                lastname,
                email,  
                password,
                phone,
                image
            )
        values($1,$2,$3,$4,$5,$6) RETURNING id
        
    `;
    console.log("SQL <> ", user);
    // console.log("SQL 32 <> ", sql);
    return db.one(sql, [
        user.name,
        user.lastname,
        user.email,
        user.password,
        user.phone,
        user.image,
    ]);
};


module.exports = User;

// VALUES(
//     $[name],
//     $[lastname],
//     $[email],
//     $[password],
//     $[phone],
//     $[image],
//     $[created_at],
//     $[updated_at]
// )