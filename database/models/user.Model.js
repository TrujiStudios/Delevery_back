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

// find user by id
User.findById = (id, callback) => {
    const sql = `SELECT id,email,name,lastname,image,phone,password,session_token 
         FROM 
            users
                WHERE id = $1
    `;
    return db.oneOrNone(sql, id).then((user) => {
        callback(null, user);
    }).catch((error) => {
        callback(error, null);
    });
};

// find user by email
User.findByEmail = async (email) => {
    const sql = `SELECT 
    u.id,
    u.email,
    u.name,
    u.lastname,
    u.image,
    u.phone,
    password,
    session_token,
    json_agg(
        json_build_object(
            'id', R.id,
            'name', R.name,
            'image', R.image,
            'route', R.route
        )
    ) AS roles
    FROM
        users As u
    INNER JOIN user_has_role As UHR
        ON UHR.user_id = u.id
    INNER JOIN roles As R
        ON R.id = UHR.role_id
    WHERE
        u.email = $1
    GROUP BY
        u.id
        -- u.email,
        -- u.name,
        -- u.lastname,
        -- u.image,
        -- u.phone,
        -- password,
        -- session_token
    `

    const user = await db.oneOrNone(sql, email);
    if (!user) throw new Error('User not found');
    return user;

    // return db.oneOrNone(sql, email);

}

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