const express = require('express');
const path = require('path');
const users = require('./controllers/users');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001; //this port is usually used for dev



