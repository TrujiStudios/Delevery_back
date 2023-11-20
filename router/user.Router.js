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

    router.get("/", async (req, res, next) => {
        try {
            const result = await userServ.getAllUsers();
            res.json({
                success: true,
                message: "get all users",
                result
            })
        } catch (err) {
            console.log(`Error: ${err}`);
            return res.status(501).json({
                success: false,
                message: "Error: al obtener los usuarios",
                err
            });
            // next(err);
        }
    });

}
module.exports = userRoute;