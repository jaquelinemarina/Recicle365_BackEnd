const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

const localsRoutes = new Router()

localsRoutes.post("/", LocalController.createLocal)
localsRoutes.get("/", LocalController.getAllLocals)
localsRoutes.get("/:id", LocalController.getLocalById)
localsRoutes.put("/:id", LocalController.updateLocal)

module.exports = localsRoutes