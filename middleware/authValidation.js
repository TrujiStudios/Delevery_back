const jwt = require("jsonwebtoken")
const { config } = require("../config/config")
// const { forbidden } = require("../helpers/sendStatus");


function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, config.secretOrKey);
        return decoded;
    } catch (error) {
        throw error;
    }
}

function validateToken(req, res, next) {
    const bearer = req.headers.autorization;

    if (bearer && bearer.startsWith('Bearer')) {
        const [, token] = bearer.split("Bearer ");

        if (token) {
            console.log(token);
            try {
                const decodedToken = verifyToken(token);
                req.user = decodedToken;
                return next();
            } catch ({ message, name }) {
                return res.status(403).json({
                    error: true,
                    message,
                    type: name
                });
            }
        }
    }
    return res.status(403).json({
        error: true,
        message: "Insufficient permissions"
    });
}

function roleValidation(requiredRoles) {
    return (req, res, next) => {
        const userRole = req.user.role;

        if (requiredRoles.includes(userRole)) { //si el rol del usuario esta incluido en los roles requeridos
            return next();
        } else {
            return res.status(403).json({
                error: true,
                message: `Insufficient permissions for ${userRole}`
            });
        }
    };
}

const superAdminValidation = roleValidation(["superAdmin"]);
const adminValidation = roleValidation(["admin", "superAdmin"]);
const gestorValidation = roleValidation(["gestor", "superAdmin"]);
const gestorAdminValidation = roleValidation(["gestor", "admin", "superAdmin"]);

function authMiddleware(roles) {
    const middlewareFunctions = {
        gestorAdmin: gestorAdminValidation,
        admin: adminValidation,
        gestor: gestorValidation,
        superAdmin: superAdminValidation
    };
    const selectedMiddlewares = roles.map(role => middlewareFunctions[role]).filter(Boolean);
    return [validateToken, ...selectedMiddlewares];
}

module.exports = {authMiddleware, validateToken}