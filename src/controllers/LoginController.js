const User = require('../models/User')
const { compareSync } = require('bcryptjs')
const { sign } = require('jsonwebtoken')

class LoginController {
    async login(req, res) {
        const data = req.body

        if (!data.email || !data.password) {
            return res.status(400).json({ erro: "E-mail e senha são obrigatórios." })
        }

        const user = await User.findOne({
            where: {
                email: data.email
            }
        })

        if (!user) {
            return res.status(404).json({ erro: "Usuário não encontrado." })
        }

        const correctPassword = compareSync(
            data.password,
            user.password
        )

        if (correctPassword === false) {
            return res.status(401).json({ erro: "Email ou senha incorretos." })
        }

        const token = sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        return res.status(200).json({
            name: user.name,
            token: token
        })
    }
}

module.exports = new LoginController()