'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Publishers', [
      { name: '', location: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', location: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', location: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', location: '', createdAt: new Date(), updatedAt: new Date() },
      { name: '', location: '', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Publishers', null, {});
  }
};
