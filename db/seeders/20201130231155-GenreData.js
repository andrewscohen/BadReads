'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
