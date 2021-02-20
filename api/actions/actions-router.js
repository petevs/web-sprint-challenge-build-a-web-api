// Write your "actions" router here!
const express = require('express')
const actions  = require('./actions-model')

const router = express.Router()

router.get('/', ( req, res ) => {
    actions.get()
        .then((actions) => {
            res.status(200).json(actions)
        })
})

router.get('/:id', ( req, res ) => {
    actions.get(req.params.id)
        .then((actions) => {
            res.status(200).json(actions)
        })
})

router.post('/', ( req, res) => {
    actions.insert(req.body)
        .then((action) => {
            res.status(200).json(action)
        })
})

router.put('/:id', ( req, res) => {
    actions.update(req.params.id, req.body)
        .then((action) => {
            res.status(200).json(action)
        })
})

router.delete('/:id', ( req, res ) => {
    actions.remove(req.params.id)
        .then( (action) => {
            res.status(200).json(action)
        })
})

module.exports = router