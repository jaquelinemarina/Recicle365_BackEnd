const { Router } = require('express')
const usersRoutes = require('./users.routes')
const LoginController = require('../controllers/LoginController')

const routes = new Router()

routes.use('/user', usersRoutes)
routes.post('/login', LoginController.login)

module.exports = routes