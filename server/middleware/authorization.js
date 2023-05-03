const users = require('../models/users');

function parseAuthorizationHeader(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        users.verifyTokenAsync(token)
            .then(user => {
                req.user = user;
                next();
            })
            .catch(err => {
                next({ code: 401, message: err });
            });
    } else {
        next();
    }
}

function requireLogin(requireAdmin = false) {
    return (req, res, next) => {
        console.log(req.user);
        if (req.user) {
            if (req.user.role !== 'admin' && requireAdmin) {
                next({ code: 403, message: 'this resource is admin only' });
            } else {
                next();
            }
        } else {
            next({ code: 401, message: 'You must be logged in to access this resouce' });
        }
    };
}

module.exports = {
    requireLogin,
    parseAuthorizationHeader
}