const express = require('express');

const {
    httpUserRegister,
    httpUserLogin
} = require('./users.controller');

const usersRouter = express.Router();

usersRouter.post('/register', httpUserRegister);

usersRouter.post('/login', httpUserLogin);

module.exports = usersRouter;