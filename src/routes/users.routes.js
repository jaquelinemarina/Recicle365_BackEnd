const { Router } = require('express')
const UserController = require('../controllers/UserController')

const usersRoutes = new Router()

usersRoutes.post("/", UserController.create)

module.exports = usersRoutes