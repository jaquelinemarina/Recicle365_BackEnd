const { verify } = require('jsonwebtoken')

function validateToken(req, res, next) {
    try {
        const token = req.headers.authorization

        console.log(token)

        if (!token) {
            return res.status(400).json({ mensagem: 'Token não informado.' })
        }

        const tokenReceived = token.split(' ')[1]

        const result = verify(tokenReceived, process.env.JWT_SECRET)

        req.userId = result.id

        next()

    } catch (error) {
        console.log(error.message)

        if (error.message === 'jwt malformed' || error.message === 'invalid token') {
            return res.status(401).json({ mensagem: 'Token inválido.' })
        }
        if (error.message === 'jwt expired') {
            return res.status(401).json({ mensagem: 'Token expirado.' })
        }
        else {
            return res.status(500).json({ mensagem: 'Erro ao validar token.' })
        }
    }
}

module.exports = validateToken