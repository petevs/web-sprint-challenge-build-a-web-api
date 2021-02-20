// Write your "actions" router here!
const express = require('express')
const actions  = require('./actions-model')

const router = express.Router()

router.get('/', ( req, res ) => {
    res.status(200).json({
        message: "hi I am working"
    })
})

module.exports = router