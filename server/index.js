require('dotenv').config();
const express = require('express');
const path = require('path');
const users = require('./controllers/users');
const feed = require('./controllers/feed');
const post = require('./controllers/post');
const { requireLogin, parseAuthorizationHeader } = require('./middleware/authorization');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001; //this port is usually used for dev

// Middleware
app
    .use(express.json())
    .use(express.static(path.join(__dirname, '../client/dist')))

    //CORS
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
        if(req.method === 'OPTIONS') {
            return res.status(200).send({});
        }
        next()
    })

    .use(parseAuthorizationHeader)

// Actions
app
    .use('/api/v1/users', users)
    .use('/api/v1/feed', feed)
    .use('/api/v1/post', post)
    
// Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// Error handling
app
    .use((err, req, res, next) => { // req is REQUEST and res is RESPONS
        console.error(err);
        const msg = {
            status: err.code || 500,
            error: err.message || 'Internal Server Error',
            isSuccess: false
        }
        res.status(msg.status).json(msg)
    })

console.log('1: About to start server')

app.listen(port, () => 
    console.log(`2: Server running at http://${hostname}:${port}/`)
);

console.log('3: Asked server to start')

