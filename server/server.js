const {config} = require('../config/config')


const app = require('..')

app.listen(config.PORT, '192.168.0.9' || '172.30.217.10' || 'localhost', () => {
    console.log()
    console.log(`Example app listening at http://localhost:${config.PORT}`)
})