const express = require('express');
const model = require('../models/post');

const router = express.Router();

router 
    .post('/', (req, res) => {
        const post = req.body;
        model.makePost(post);
        const data = { data: post, isSuccess: true };
        res.send(data)
    })

module.exports = router;
