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
    'host': config.database.dbHost || 'ep-long-salad-98579158.us-east-2.aws.neon.fl0.io',
    'port': config.database.port || 5432,
    'database': config.database.dbName || 'delivery',
    'user': config.database.dbUsername || 'fl0user',
    'password': config.database.dbPassword || '0a3dHgBcWmJs',
};

// const db = pgp(databaseConfig);
const db = pgp('postgres://fl0user:0a3dHgBcWmJs@ep-long-salad-98579158.us-east-2.aws.neon.fl0.io:5432/delivery?sslmode=require');

module.exports = db;