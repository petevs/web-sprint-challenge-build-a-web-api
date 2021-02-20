const actions = require('../actions/actions-model')
const projects = require('../projects/projects-model')

function validateActionId(req, res, next) {
    actions.get(req.params.id)
        .then((action) => {
            if(action) {
                req.action = action
                next()
            } else {
                res.status(404).json({
                    message: "action not found"
                })
            }
        })
        .catch(next)
}

function validateAction( req, res, next ) {
    if(!req.body) {
        return res.status(400).json({
            message: "missing action data"
        })
    }

    if(!req.body.project_id){
        return res.status(400).json({
            message: "Missing project id"
        })
    }

    if(!req.body.description){
        return res.status(400).json({
            message: "Missing action description"
        })
    }

    if(!req.body.notes){
        return res.status(400).json({
            message: "Missing action notes"
        })
    }

    next()
}

function validateProject( req, res, next) {
    if(!req.body) {
        return res.status(400).json({
            message: "Missing project data"
        })
    }

    if(!req.body.name) {
        return res.status(400).json({
            message: "Missing project name"
        })
    }

    if(!req.body.description) {
        return res.status(400).json({
            message: "Missing project description"
        })
    }

    next()
}

function validateProjectId( req, res, next) {
    projects.get(req.params.id || req.body.project_id)
        .then((projects) => {
            if(projects) {
                req.project = projects
                next()
            } else {
                res.status(404).json({
                    message: "project not found"
                })
            }
        })
        .catch(next)
}

module.exports = {
    validateActionId,
    validateAction,
    validateProject,
    validateProjectId
}