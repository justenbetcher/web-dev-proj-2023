const express = require('express');
const model = require('../models/users');

const router = express.Router();

router
    .get('/', (req, res) => {
        const list = model.getUsers();
        const data = { data: list, total: list.length, isSuccess: true };
        res.send(data)
    })

    

    .get('/:id', (req, res) => {
        const id = req.params.id;
        const user = model.getUserByID();
        const data = { data: user, isSuccess: true };
        res.send(data)
    })

    .get('/:id', (req, res) => {
        const id = req.params.id;
        const user = model.getUserByID();
        const postList = user.postHistory;
        const data = { data: postList, total: postList.length, isSuccess: true };
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


    .post('/post/:id', (req, res) => {
        const post = req.body;
        model.updateUserHistory(post);
        const data = { data: post, isSuccess: true };
        res.send(data)
    })

    .delete('/:id', (req, res) => {
        const id = req.params.id;
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