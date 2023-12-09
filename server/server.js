const {config} = require('../config/config')


const app = require('..')

app.listen(config.port, '192.168.0.3' || 'localhost', () => {
    console.log()
    console.log(`Example app listening at http://localhost:${config.port}`)
})