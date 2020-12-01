'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      { name: '', description: '', pageCount: '', publisherId: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', description: '', pageCount: '', publisherId: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', description: '', pageCount: '', publisherId: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', description: '', pageCount: '', publisherId: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', description: '', pageCount: '', publisherId: '', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
