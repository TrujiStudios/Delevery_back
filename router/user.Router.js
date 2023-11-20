'use strict';

const express = require('express');

// const userService = require('../service/user.Service');
const UserService = require("../service/user.Service");

// const authResponse = require('../helpers/authResponse');
// const authMiddleware = require('../middleware/authValidation');


function userRoute(app) {
    const router = express.Router();
    const userServ = new UserService()

    app.use('/api/users', router);

    router.get("/", async (req, res) => {
        try {
            console.log("hola")
            const result = await userServ.getAllUsers();
            res.json({
                message: "get all users",
                result
            })
        } catch (err) {
            return res.status(500).json({
                message: err.message
            })
        }
    })
}
module.exports = userRoute;