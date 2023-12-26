const {config} = require('../config/config')


const app = require('..')

app.listen(config.PORT, '172.30.217.10' || 'localhost', () => {
    console.log()
    console.log(`Example app listening at http://localhost:${config.PORT}`)
})