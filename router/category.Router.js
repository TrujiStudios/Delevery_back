'use strict';

const express = require('express');
const passport = require('passport');

const CategoryService = require('../service/Category.Service');



function categoryRoute(app, upload) {
    const router = express.Router();
    const categoryServ = new CategoryService();

    app.use('/api/Category', router);

    router.post('/create',passport.authenticate('jwt', { session: false }), async (req, res, next) => {
        try {
            const category = await categoryServ.categoresCreate(req.body);
            return res.status(201).json({
                message: "SE CREO CORRECTAMENTE",
                success: true,
                error: null,
                data: category.id
            })

        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                message: "Error: al crear la categoria",
                error: error.message,
                success: false,
            });

            next(error);
        }
    });
}

module.exports = categoryRoute;