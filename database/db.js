// crear conexion con postgreSQL

const promise = require('bluebird');
const { config } = require('../config/config');

const options = {
    promiseLib: promise,
    query: (e) => {
        console.log(e.query);
    }
};

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function (stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': config.database.dbHost,
    'port': config.database.port,
    'database': config.database.dbName,
    'user': config.database.dbUsername,
    'password': config.database.dbPassword,
};

const db = pgp(databaseConfig);

module.exports = db;