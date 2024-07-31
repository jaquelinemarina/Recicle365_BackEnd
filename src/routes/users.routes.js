const { Router } = require('express')
const UserController = require('../controllers/UserController')

const usersRoutes = new Router()

usersRoutes.post("/", UserController.create
    /*
    #swagger.tags = ['Usuários'],
    #swagger.description = 'Endpoint para cadastrar um novo usuário.',
    #swagger.parameters['createUser'] = {
        in: 'body',
        description: 'Informações do usuário.',
        required: true,
        schema: { 
            $name: "Zé Ninguém",
            $cpf: "12345678901",
            $sex: "feminino", 
            $birth: "1990-01-01",
            $adress: "Rua dos Bobos, nº 0",
            $email: "email@example.com",
            $password: "12345Jj$"
        }
    }
    */
)

module.exports = usersRoutes