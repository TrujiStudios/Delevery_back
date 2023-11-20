const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
const { config } = require("./config/config");

const app = express();

//importar rutas
const auth = require('./router/auth.Router');


//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //si lo tengo en true me permite enviar imagenes y archivos y es false solo permite texto
app.use(cors("*"))
// app.use(cors({
//     origin:["http://localhost:3000","http://127.0.0.1:5500"],
//     credentials:true
// }))
app.disable('x-powered-by'); //es linea de seguridad para que no se sepa que tecnologia se esta utilizando en el backend


//utilizar rutas
auth(app);


// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./libs/swagger/swagger.json')));

//Error handler.
// app.use((err, req, res, next) => {
//     console.log(err)
//     const { output: { statusCode, payload } } = err;
//     res.status(statusCode).json(withErrorStack(payload, err.stack));
// });

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send(err.message || 500).send(err.stack);
});


module.exports = app


