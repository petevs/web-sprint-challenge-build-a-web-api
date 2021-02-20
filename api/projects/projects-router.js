// Write your "projects" router here!
const express = require('express')
const projects = require('./projects-model')

const router = express.Router()

router.get('/', ( req, res, next ) => {
    projects.get()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.get('/:id', ( req, res, next ) => {
    projects.get(req.params.id)
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch(next)
})

router.post('/', ( req, res, next ) => {
    projects.insert(req.body)
        .then((project) => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.put('/:id', ( req, res, next ) => {
    projects.update(req.params.id, req.body)
        .then( (project) => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.delete('/:id', ( req, res, next ) => {
    projects.remove(req.params.id)
        .then((project) => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.get('/:id/actions/', ( req, res, next ) => {
    projects.getProjectActions(req.params.id)
        .then((actions) => {
            res.status(200).json(actions)
        })
})

module.exports = router