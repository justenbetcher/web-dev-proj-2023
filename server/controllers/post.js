const express = require('express');
const model = require('../models/post');

const router = express.Router();

router 
    .post('/:id', (req, res, next) => {
        model.makePost(req.params.id, req.body)
        .then(holder => {
            const data = { data: holder, isSuccess: true };
            res.send(data);
        })
        .catch(next)
    })

module.exports = router;
