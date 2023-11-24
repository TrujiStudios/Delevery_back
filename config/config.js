require("dotenv").config();


const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  secretOrKey: process.env.SECRET_OR_KEY,
  database: {
    dbHost: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
    dbName: process.env.DB_NAME || 'postgres',
    dbUsername: process.env.DB_USERNAME || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'admin',
  },
};


module.exports = { config }