const axios = require('axios')
const linkMapApi = 'https://nominatim.openstreetmap.org/search?format=json&country=Brazil&limit=1'

async function getMapLocal(cep) {
    try {
        const cleanedCep = cep.replace(/\D/g, '')
        const response = await axios.get(`${linkMapApi}&postalcode=${cleanedCep}`)

        if (!response.data || response.data.length === 0) {
            throw new Error('O CEP não existe ou é inválido.')
        }

        const { lat, lon, display_name } = response.data[0]

        if (!lat || !lon || !display_name) {
            throw new Error('Endereço, latitude ou longitude não encontrados.')
        }

        return { lat, lon, display_name }

    } catch (error) {
        console.log(error)
        throw new Error('Erro ao conectar com a API de mapas.')
    }
}

function getGoogleMapsLink(lat, lon) {
    try {
        const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`
        return googleMapsLink

    } catch (error) {
        console.log(error)
        throw new Error('Erro ao gerar o link do Google Maps.')
    }
}

module.exports = { getMapLocal, getGoogleMapsLink }