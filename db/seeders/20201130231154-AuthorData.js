'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
