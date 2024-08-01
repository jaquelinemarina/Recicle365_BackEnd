const User = require('../models/User')
const { hashSync } = require('bcryptjs')

const regexEmail = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/)
const regexSenha = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/)

class UserController {
    async create(req, res) {
        try {
            const data = req.body

            if (!data.name) {
                return res.status(400).json({ erro: "O nome é obrigatório." })
            }
            if (!data.cpf) {
                return res.status(400).json({ erro: "O CPF é obrigatório." })
            }
            if (data.cpf.length !== 11) {
                return res.status(400).json({ erro: "O CPF deve ter 11 dígitos." })
            }
            if (!data.email) {
                return res.status(400).json({ erro: "O e-mail é obrigatório." })
            }
            if (regexEmail.test(data.email)) {
                return res.status(400).json({ erro: "O e-mail é inválido." })
            }
            if (!regexSenha.test(data.password)) {
                return res.status(400).json({ erro: "A senha deve ter entre 8 e 16 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial." })
            }

            const userExists = await User.findOne({
                where: {
                    email: data.email
                },
                where: {
                    cpf: data.cpf
                }
            })

            if (userExists) {
                return res.status(409).json({ erro: "Usuário já cadastrado com este e-mail ou CPF." })
            }

            const user = await User.create(data)

            return res.status(201).json({
                name: user.name,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ erro: "Erro interno no servidor." })
        }
    }
}
User.beforeSave((user) => {
    user.password = hashSync(user.password, 10)
})

module.exports = new UserController()