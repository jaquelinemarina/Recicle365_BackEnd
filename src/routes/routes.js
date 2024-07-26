const { Router } = require('express')
const usersRoutes = require('./users.routes')
const LoginController = require('../controllers/LoginController')

const validateToken = require('../middlewares/validateToken')

const routes = new Router()

routes.use('/user', usersRoutes)
routes.post('/login', LoginController.login)

routes.use(validateToken)

module.exports = routes