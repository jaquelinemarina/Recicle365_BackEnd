const { DataTypes } = require('sequelize')
const connection = require('../database/connection')
const User = require('./User')

const Local = connection.define('locals', {
    localName: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    typeResidue: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
        onDelete: 'RESTRICT'
    }
})

Local.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Local, { foreignKey: 'userId' })

module.exports = Local