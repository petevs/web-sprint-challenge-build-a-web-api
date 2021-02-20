// Write your "actions" router here!
const express = require('express')
const actions  = require('./actions-model')
const { validateActionId, validateAction, validateProjectId } = require('../middleware/middleware')

const router = express.Router()

router.get('/', ( req, res, next ) => {
    actions.get()
        .then((actions) => {
            res.status(200).json(actions)
        })
        .catch(next)
})

router.get('/:id', validateActionId, ( req, res ) => {
    res.json(req.action)
    // actions.get(req.params.id)
    //     .then((actions) => {
    //         res.status(200).json(actions)
    //     })
})

router.post('/', validateProjectId, validateAction, ( req, res, next) => {
    actions.insert(req.body)
        .then((action) => {
            res.status(200).json(action)
        })
        .catch(next)
})

router.put('/:id', validateActionId, validateAction, ( req, res, next) => {
    actions.update(req.params.id, req.body)
        .then((action) => {
            res.status(200).json(action)
        })
        .catch(next)
})

router.delete('/:id', validateActionId, ( req, res, next ) => {
    actions.remove(req.params.id)
        .then( (action) => {
            res.status(200).json(action)
        })
        .catch(next)
})

module.exports = router