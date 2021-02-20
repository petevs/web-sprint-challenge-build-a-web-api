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
    validateProjectId
}