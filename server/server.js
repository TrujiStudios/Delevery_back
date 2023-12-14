const {config} = require('../config/config')


const app = require('..')

app.listen(config.port, '192.168.0.9' || 'localhost', () => {
    console.log()
    console.log(`Example app listening at http://localhost:${config.port}`)
})