const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const User = connection.define('users', {
    name: {
        type: DataTypes.STRING(150)
    },
    cpf: {
        type: DataTypes.STRING(11)
    },
    sex: {
        type: DataTypes.ENUM('masculino', 'feminino', 'outro')
    },
    birth: {
        type: DataTypes.DATEONLY
    },
    address: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

module.exports = User