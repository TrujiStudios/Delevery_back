require("dotenv").config();


const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  production: process.env.NODE_ENV === 'false',
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  secretOrKey: process.env.SECRET_OR_KEY,
  id_developer: process.env.ID_DEVELOPER,
  storageBucket: process.env.STORAGE_BUCKET || 'gs://delivey-app-trujistudios.appspot.com/',
  database: {
    dbHost: process.env.DB_HOST || 'ep-lingering-base-73023017.eu-central-1.aws.neon.tech',
    port: process.env.DB_PORT || 5432,
    dbName: process.env.DB_NAME || 'koyebdb',
    dbUsername: process.env.DB_USERNAME || 'oyeb-adm',
    dbPassword: process.env.DB_PASSWORD || 'Awu4FfWi7eKp',
  },
};


module.exports = { config }



// DATABASE_HOST=ep-lingering-base-73023017.eu-central-1.aws.neon.tech
// DATABASE_USER=koyeb-adm
// DATABASE_PASSWORD=Awu4FfWi7eKp
// DATABASE_NAME=koyebdb