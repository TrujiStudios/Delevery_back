require("dotenv").config();


const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV || 'development',
  production: process.env.NODE_ENV,
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  secretOrKey: process.env.SECRET_OR_KEY,
  id_developer: process.env.ID_DEVELOPER,
  storageBucket: process.env.STORAGE_BUCKET,
  sessionSecret: process.env.SESSION_SECERT,
  database: {
    dbHost: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
    dbUsername: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
  },
};


module.exports = { config }



// DATABASE_HOST=ep-lingering-base-73023017.eu-central-1.aws.neon.tech
// DATABASE_USER=koyeb-adm
// DATABASE_PASSWORD=Awu4FfWi7eKp
// DATABASE_NAME=koyebdb

