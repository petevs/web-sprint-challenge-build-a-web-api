// Write your "projects" router here!
const express = require('express')
const projects = require('./projects-model')

const router = express.Router()

router.get('/', ( req, res ) => {
    res.status(200).json({
        message: "projects router hooked up"
    })
})

module.exports = router