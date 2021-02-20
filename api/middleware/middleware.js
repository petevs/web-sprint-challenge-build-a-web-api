const actions = require('../actions/actions-model')

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

module.exports = {
    validateActionId
}