const express = require('express');
const model = require('../models/feed');

const router = express.Router();

router

    .get('/', (req, res) => {
        const list = model.getFeed();
        const data = { data: list, total: list.length, isSuccess: true }
        res.send(data);
    })

module.exports = router;