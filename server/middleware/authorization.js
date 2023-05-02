const users = require('../models/users');

function parseAuthorizationHeader(req, res, next) {
    const token = req.headers.authorization?.split(' ')(1);
    if (token) {
        users.verifyTokenAsync(token)
    }
}