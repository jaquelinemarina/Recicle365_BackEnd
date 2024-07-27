const Local = require('../models/Local')
const mapAPI = require('../services/map.service')

const validTypes = ['plástico', 'metal', 'vidro', 'papel', 'baterias', 'orgânico', 'outros']

function normalText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}

class LocalController {
    async createLocal(req, res) {
        const { cep, localName, description, typeResidue, userId } = req.body

        const types = typeResidue.map(type => normalText(type))
        const validTypesNormalized = validTypes.map(type => normalText(type))

        if (!Array.isArray(typeResidue) || types.some(type => !validTypesNormalized.includes(type))) {
            return res.status(400).json({ error: 'Tipo de resíduo inválido. Opções válidas são: plástico, metal, vidro, papel, baterias, orgânico, outros.' })
        }

        try {
            const { lat, lon, display_name } = await mapAPI.getMapLocal(cep)

            const localExists = await Local.findOne({
                where: {
                    location: display_name
                }
            })

            if (localExists) {
                return res.status(409).json({ erro: "Ponto de coleta já cadastrado neste endereço." })
            }

            const local = await Local.create({
                localName,
                description,
                location: display_name,
                latitude: lat,
                longitude: lon,
                userId,
                typeResidue
            })

            const googleMapsLink = await mapAPI.getGoogleMapsLink(lat, lon)

            res.status(201).json({
                local,
                googleMapsLink
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ erro: 'Erro interno no servidor.' })
        }
    }
}

module.exports = new LocalController()