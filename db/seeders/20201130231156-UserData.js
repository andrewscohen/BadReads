'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { userName: '', email: '', password: '', createdAt: new Date(), updatedAt: new Date() },
      { userName: '', email: '', password: '', createdAt: new Date(), updatedAt: new Date() },
      { userName: '', email: '', password: '', createdAt: new Date(), updatedAt: new Date() },
      { userName: '', email: '', password: '', createdAt: new Date(), updatedAt: new Date() },
      { userName: '', email: '', password: '', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
