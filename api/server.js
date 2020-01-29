const express = require('express');

//TODO: Import your routers
const authRouter = require('../auth/auth-router.js');
const todosRouter = require('../todos/todos-router.js');

const configureMiddleware = require('./configure-middleware.js');

const server = express();

configureMiddleware(server);

server.use('/auth', authRouter);
server.use('/', todosRouter);

module.exports = server;