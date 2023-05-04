const express = require('express');
const model = require('../models/post');

const router = express.Router();

router 
    .post('/:id', (req, res, next) => {
        model.makePost(req.params.id, req.body)
        .then(x => {
            const data = { data: x, isSuccess: true };
            res.send(data);
        })
        .catch(next)
    })

    .delete('/:postId/:userId', (req, res, next) => {
        model.deletePost(req.params.postId, req.params.userId)
        .then(x => {
            const data = { data: x.feedResult, isSuccess: true };
            res.send(data);
        })
        .catch(next)
    })


module.exports = router;
