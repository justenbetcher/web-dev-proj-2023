const express = require('express');
const model = require('../models/users');

const router = express.Router();

router
    .get('/', (req, res) => {
        const list = model.getUsers();
        const data = { data: list, total: list.length, isSuccess: true };
        res.send(data)
    })

    .get('/search/:q', (req, res) => {
        const name = req.params.q;
        console.log({ name });
        const list = model.searchUser(name);
        const data = { data: list, total: list.length, isSuccess: true };
        res.send(data)
    })

    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const user = model.getUserById(id);
        const data = { data: user, isSuccess: true };
        res.send(data)
    })

    .post('/', (req, res) => {
        const user = req.body;

        console.log({ user });
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.addUser(user);
        const data = { data: user, isSuccess: true };
        res.send(data)
    })

    .patch('/:id', (req, res) => {
        const user = req.body;
        model.updateUser(user);
        const data = { data: user, isSuccess: true };
        res.send(data)
    })

    .delete('/:id', (req, res) => {
        const id = +req.params.id;
        model.deleteUser(id);
        const data = { data: id, isSuccess: true };
        res.send(data)
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