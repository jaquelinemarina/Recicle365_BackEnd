const { Router } = require('express')
const usersRoutes = require('./users.routes')
const LoginController = require('../controllers/LoginController')
const localsRoutes = require('./locals.routes')

const validateToken = require('../middlewares/validateToken')

const routes = new Router()

routes.use('/usuario', usersRoutes)
routes.post('/login', LoginController.login)

routes.use(validateToken)
routes.use('/local', localsRoutes)

module.exports = routes