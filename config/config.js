require("dotenv").config();


const config = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    dbName: process.env.DB_NAME || "DB-XYZ",
    dbUser: process.env.DB_USER || "root",
    dbPassword: process.env.DB_PASSWORD || "root",
    dbHos: process.env.DB_HOST || "127.0.0.1",
    dbPort: process.env.DB_PORT || "3306",   
    dbmongoUrl: process.env.DB_MONGOURL,
    jwtSecret: process.env.JWT_SECRET,
    emailService: process.env.EMAIL_SERVICE,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    database:{
        dbUsername: process.env.DB_USERNAME,
        dbPassword: process.env.DB_PASSWORD,
        dbHost: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        // port: process.env.DB_PORT,
      },
};


module.exports = {config}