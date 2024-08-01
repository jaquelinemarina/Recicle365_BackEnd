const { Router } = require('express')
const LocalController = require('../controllers/LocalController')

const localsRoutes = new Router()

localsRoutes.post("/", LocalController.createLocal
    /*
       #swagger.tags = ['Locais'],
       #swagger.description = 'Endpoint para cadastrar um novo ponto de coleta.',
       #swagger.parameters['createLocal'] = {
           in: 'body',
           description: 'Informações do local',
           required: true,
           schema: { 
               $cep: "12345678",
               $localName: "Jardim Botânico",
               $description: "Ponto de coleta de resíduos.",
               $typeResidue: [
                   "orgânico",
                   "plástico",
                   "baterias",
                   "papel",
                   "vidro",
                   "metal",
                   "outros"
               ],
            }
        }
   */
)
localsRoutes.get("/", LocalController.getAllLocals
    /*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para listar todos os locais do usuário autenticado.'
    */
)
localsRoutes.get("/:id", LocalController.getLocalById
    /*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para listar um local específico do usuário autenticado.',
    #swagger.parameters['id'] = { description: 'ID do local' },
    */
)
localsRoutes.put("/:id", LocalController.updateLocal
    /*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para atualizar um local cadastrado pelo usuário autenticado.'
    #swagger.parameters['updateLocal'] = {
        in: 'body',
        description: 'Informações do local',
        required: true,
        schema: { 
        $cep: "12345678",
        $localName: "Jardim Botânico",
        $description: "Ponto de coleta de resíduos.",
        $typeResidue: [
        "orgânico",
        "plástico",
        "baterias",
        "papel",
        "vidro",
        "metal",
        "outros"
        ],
        }
    }
    */
)
localsRoutes.delete("/:id", LocalController.deleteLocal
    /*
    #swagger.tags = ['Locais']
    #swagger.description = 'Endpoint para deletar um local cadastrado pelo usuário autenticado.',
    #swagger.parameters['id'] = { description: 'ID do local' }
    */
)

localsRoutes.get('/:id/maps', LocalController.getGoogleMapsLink
    /*
    #swagger.tags = ['Link Google Maps']
    #swagger.description = 'Endpoint para obter o link do Google Maps de um local cadastrado pelo usuário autenticado.',
    #swagger.parameters['id'] = { description: 'ID do local' }
    */
)

module.exports = localsRoutes