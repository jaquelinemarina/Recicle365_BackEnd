'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        name: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING(11),
          allowNull: false,
          unique: true
        },
        sex: {
          type: Sequelize.ENUM('masculino', 'feminino', 'outro')
        },
        birth: {
          type: Sequelize.DATEONLY
        },
        address: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
}