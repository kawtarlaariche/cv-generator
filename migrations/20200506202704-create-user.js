'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.DATE
      },
      placeBirth: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB
      },
      linkedin: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      facebook: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};