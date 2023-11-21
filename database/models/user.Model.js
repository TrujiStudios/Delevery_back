'use strict';

const bcrypt = require('bcrypt');
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
    // hash password.
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;

    const sql = `
        INSERT INTO
            users(
                email,  
                name,
                lastname,
                phone,
                password
            )
        values($1,$2,$3,$4,$5) RETURNING id        
    `;
    return db.one(sql, [
        user.email,
        user.name,
        user.lastname,
        user.phone,
        user.password
    ]);
};
module.exports = User;