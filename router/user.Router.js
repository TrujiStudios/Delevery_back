'use strict';

const express = require('express');

// const userService = require('../service/user.Service');
const UserService = require("../service/user.Service");

// const authResponse = require('../helpers/authResponse');
// const authMiddleware = require('../middleware/authValidation');


function userRoute(app,upload) {
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

    router.get("/findByUserId/:idUser", async (req, res, next) => {
        try {
            const result = await userServ.findByUserId(req.params.idUser)
            res.json({
                success: true,
                message: "get all",
                data:result
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

    router.put("/update", upload.array('image', 1), async (req, res, next) => {
        try {
            const user = JSON.parse(req.body.user);
            const files = req.files;
            const result = await userServ.updateWithimages(user, files)
            return res.status(201).json({
                message: "Usuario actualizado con exito",
                success: true,
                error: null,
            })
        } catch (err) {
            console.log(`Error: ${err}`);
            return res.status(501).json({
                message: "Error: al actualizar el usuario",
                error: err.message,
                success: false,
            });
        }
    });

}
module.exports = userRoute;