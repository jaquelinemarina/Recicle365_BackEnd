const Local = require('../models/Local')
const User = require('../models/User')
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
        const { cep, localName, description, typeResidue } = req.body
        const userId = req.userId

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
                userId: userId,
                typeResidue
            })

            const googleMapsLink = await mapAPI.getGoogleMapsLink(lat, lon)

            res.status(201).json({
                local,
                googleMapsLink
            })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ erro: 'Erro ao conectar com a API de mapas.' })
        }
    }

    async getAllLocals(req, res) {
        try {
            const locals = await Local.findAll({
                attributes: ['id', 'localName', 'description', 'typeResidue']
            })

            res.status(200).json(locals)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ erro: 'Erro ao buscar pontos de coleta.' })
        }
    }

    async getLocalById(req, res) {
        const id = req.params.id
        const userId = req.userId

        try {
            const local = await Local.findOne({
                where: {
                    id: id,
                    userId: userId
                },
                include: {
                    model: User,
                    as: 'user',
                    attributes: ['name']
                }
            })

            if (!id) {
                return res.status(400).json({ error: 'ID inválido.' })
            }

            if (!local) {
                return res.status(403).json({ error: 'Você não tem acesso a este ponto de coleta.' })
            }

            res.status(200).json(local)

        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }

    async updateLocal(req, res) {
        const id = req.params.id
        const userId = req.userId
        const { cep, localName, description, typeResidue } = req.body

        const types = typeResidue.map(type => normalText(type))
        const validTypesNormalized = validTypes.map(type => normalText(type))

        if (!Array.isArray(typeResidue) || types.some(type => !validTypesNormalized.includes(type))) {
            return res.status(400).json({ error: 'Tipo de resíduo inválido. Opções válidas são: plástico, metal, vidro, papel, baterias, orgânico, outros.' })
        }

        try {
            const local = await Local.findOne({
                where: {
                    id: id,
                    userId: userId
                }
            })

            if (!local) {
                return res.status(403).json({ error: 'Você não tem acesso a este ponto de coleta.' })
            }

            await local.update({
                cep: cep,
                localName: localName,
                description: description,
                typeResidue: typeResidue
            })

            res.status(200).json(local)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }

    async deleteLocal(req, res) {
        const id = req.params.id
        const userId = req.userId

        try {
            const local = await Local.findOne({
                where: {
                    id: id,
                    userId: userId
                }
            })

            if (!local) {
                return res.status(403).json({ error: 'Você não tem acesso a este ponto de coleta.' })
            }

            await local.destroy()
            res.status(204).json()

        } catch (error) {
            console.log(error)
            return res.status(500).json({ error: 'Erro interno no servidor.' })
        }
    }
}

module.exports = new LocalController()