'use strict';

const express = require('express');

const AuthService = require("../service/auth.Service");


function AuthRoute(app) {
    const router = express.Router();
    const authServ = new AuthService()

    app.use('/api/auth', router);



    router.post("/login", async (req, res,next) => {
        try {
            const result = await authServ.login(req.body)
            res.json({
                message: "login successfully",
                error: null,
                success: true,
                data:result
            })


        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                message: error.message,
                error: error.message,
                success: false,
            })
        }
    })


    router.post("/signup", async (req, res, next) => {
        try {
            const result = await authServ.signup(req.body)
            return res.status(201).json({
                message: "El usuario se creo correctamente, inicie sesion",
                error: null,
                success: true,
                data: result.id
            })
        } catch (err) {
            console.log(`Error: ${err}`);
            return res.status(501).json({
                message: "Error: al crear el usuario",
                error : err.message,
                success: false,
            });
        }
    });

}
module.exports = AuthRoute;