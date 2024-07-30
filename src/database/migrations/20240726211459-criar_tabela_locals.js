'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'locals',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        localName: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        description: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false
        },
        latitude: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        longitude: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        typeResidue: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: true
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }

      })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('locals')
  }
}