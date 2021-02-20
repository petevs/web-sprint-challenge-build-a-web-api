const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router')

// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json())
server.use('/api', actionsRouter)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong, please try again later"
    })
})


module.exports = server;
