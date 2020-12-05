'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      description: {
        type: Sequelize.TEXT
      },
      releaseDate: {
        type: Sequelize.DATEONLY
      },
      pageCount: {
        type: Sequelize.INTEGER
      },
      publisherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Publishers" }
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
    return queryInterface.dropTable('Books');
  }
};
