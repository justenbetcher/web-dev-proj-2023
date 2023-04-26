const express = require('express');
const model = require('../models/feed');

const router = express.Router();

router

    .get('/', (req, res, next) => {
        model.getFeed(+req.query.page, +req.query.pageSize)
        .then(holder => {
            const data = { data: holder.feed, total: holder.total, isSuccess: true };
            res.send(data);
        })
        .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        model.deletePost(req.params.id)
        .then(x => {
            const data = { data: x, isSeccess: true };
            res.send(data);
        })
        .catch(next);
    })

module.exports = router;