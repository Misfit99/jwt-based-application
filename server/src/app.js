const express = require('express');
const app = express();
app.use(express.json());
const usersRouter = require('./routes/users.router');
const auth = require('../src/services/auth.middleware');
app.use('/users', usersRouter);

app.post('/welcome', auth, (req,res) => {
    res.status(200).send("Welcome!!");
});

module.exports = app;