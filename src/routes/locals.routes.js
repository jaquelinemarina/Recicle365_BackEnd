const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

const localsRoutes = new Router()

localsRoutes.post("/", LocalController.createLocal)

module.exports = localsRoutes