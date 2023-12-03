'use strict';

const express = require('express');
const ProductService = require("../service/product.Servise");


function userRoute(app, upload) {
    const router = express.Router();
    const ProductServ = new ProductService()

    app.use('/api/users', router);

    router.post("/signup", async (req, res, next) => {
        try {            
            const result = await ProductServ.create(req.body)
            return res.status(201).json({
                message: "Producto creado correctamente ",
                success: true,
                error: null,
                data: result.id
            })
        } catch (err) {
            console.log(`Error: ${err}`);
            return res.status(501).json({
                message: "Error: al crear el producto",
                error: err.message,
                success: false,
            });
        }
    });
}
module.exports = userRoute;