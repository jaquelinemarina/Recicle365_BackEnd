const { Router } = require('express')
const UserController = require('../controllers/UserController')

const usersRoutes = new Router()

usersRoutes.post("/", UserController.create)
usersRoutes.delete("/:id", UserController.delete)

module.exports = usersRoutes