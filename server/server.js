
const {config} = require('../config/config')


const app = require('..')

app.listen(config.port, () => {
    console.log()
    console.log(`Example app listening at http://localhost:${config.port}`)
})