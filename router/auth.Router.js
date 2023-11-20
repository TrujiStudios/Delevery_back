'use strict';

const express = require('express');

// const userService = require('../service/user.Service');
const AuthService = require("../service/auth.Service");

// const authResponse = require('../helpers/authResponse');
// const authMiddleware = require('../middleware/authValidation');


function AuthRoute(app) {
    const router = express.Router();
    const authServ = new AuthService()

    app.use('/api/auth', router);

    router.post("/login", async (req, res) => {
        try {
            const result = await authServ.login(req.body)
            res.json({
                message: "login successfully",
                result
            })
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    })

    router.post("/signup", async (req, res) => {
        try {
            throw new Error("Error forzado"); // Lanzar un error forzado
            const result = await authServ.signup(req.body)
            return res.json({
                message: "signup successfully",
                result
            })
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    });

}
module.exports = AuthRoute;