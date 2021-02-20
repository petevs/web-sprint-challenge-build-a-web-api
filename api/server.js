const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

// Complete your server here!
// Do NOT `server.listen()` inside this file!
server.use(express.json())
server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong, please try again later"
    })
})


module.exports = server;
