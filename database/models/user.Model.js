'use strict';

const db = require('../db');

const User = {};

User.getAll = () => {
    const sql = `
        SELECT * FROM users
    `;
    return db.manyOrNone(sql);
};

module.exports = User;

