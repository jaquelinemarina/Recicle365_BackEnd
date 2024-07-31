const { Router } = require('express')
const usersRoutes = require('./users.routes')
const LoginController = require('../controllers/LoginController')
const localsRoutes = require('./locals.routes')

const validateToken = require('../middlewares/validateToken')

const routes = new Router()

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./doc.swagger.json')

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes.use('/usuario', usersRoutes)
routes.post('/login', LoginController.login
    /*
       #swagger.tags = ['Login'],
       #swagger.description = 'Endpoint para login.',
       #swagger.parameters['login'] = {
           in: 'body',
           description: 'Informações do usuário.',
           required: true,
           schema: { 
               $email: "email@example.com",
               $password: "12345Jj$"
            }
        }
    */
)
routes.use('/local', validateToken, localsRoutes)

module.exports = routes