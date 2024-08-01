const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const connection = require('./database/connection')

const PORT_API = process.env.PORT_API

class Server {
    constructor(server = express()) {
        this.middlewares(server)
        this.database()
        server.use(routes)
        this.initializeServer(server)
    }

    async middlewares(app) {
        app.use(cors())
        app.use(express.json())
        console.log('Middlewares inicializados.')
    }

    async database() {
        try {
            await connection.authenticate()
            console.log('Conectado ao banco de dados.')
        }
        catch (error) {
            console.log('Erro ao conectar ao banco de dados.')
            console.log(error)
        }
    }

    async initializeServer(app) {
        app.listen(PORT_API, () => {
            console.log(`Servidor conectado na porta ${PORT_API}`)
        })
    }
}

module.exports = { Server } 