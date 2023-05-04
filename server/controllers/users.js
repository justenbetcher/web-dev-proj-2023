const express = require('express');
const model = require('../models/users');
const { requireLogin } = require('../middleware/authorization');

const router = express.Router();

router
    .get('/', requireLogin(true), (req, res, next) => {
        model.getUsers(+req.query.page, +req.query.pageSize)
            .then(holder => {
                const data = { data: holder.users, total: holder.total, isSuccess: true };
                res.send(data);
            })
            .catch(next);
    })

    .get('/:id', requireLogin(), (req, res, next) => {
        model.getUserById(req.params.id)
        .then(user => {
            const data = { data: user, isSuccess: true };
            res.send(data);
        })
        .catch(next);
    })

    .get('/history/:id', requireLogin(),(req, res, next) => {
        model.getUserById(req.params.id)
        .then(user => {
            const data = { data: user.postHistory ?? [], total: user.postHistory.length ?? 0, isSuccess: true  };
            res.send(data);
        })
        .catch(next);
    })

    
    .patch('/:id', requireLogin(), (req, res, next) => {
        model.updateUser(req.params.id, req.body)
        .then(x => {
            const data = { data: x, isSuccess: true };
            res.send(data);
        })
        .catch(next);
    })

    .post('/seed', (req, res, next) => {
        model.seed()
        .then(x => {
            const data = { data: x, isSuccess: true };
            res.send(data);
        })
        .catch(next);
    })

    .post('/login', (req, res, next) => {
        model.login(req.body.email, req.body.password, req.body.adminPassword)
        .then(x => {
            const data = { data: { ...x.user, token: x.token }, isSuccess: true };
            res.send(data);
        })
        .catch(next);
    })
    

    .post('/', (req, res, next) => {
        model.addUser(req.body)
        .then(user => {
            const data = { data: user, isSuccess: true };
            res.send(data);
        })
        .catch(next)
    })

    .delete('/:id', requireLogin(true), (req, res, next) => {
        model.deleteUser(req.params.id)
        .then(x => {
            const data = { data: x, isSuccess: true };
            res.send(data);
        })
        .catch(next);
    })

module.exports = router;

/*
Ways to pass information to server:
    1. Query String Parameters
    2. Route Parameters
    3. Request Parameters
    4. Request Headers
    5. Cookies
*/