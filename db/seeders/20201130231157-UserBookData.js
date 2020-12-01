'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserBooks', [
      { userId: '', bookId: '', review: '', rating: '', status: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: '', bookId: '', review: '', rating: '', status: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: '', bookId: '', review: '', rating: '', status: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: '', bookId: '', review: '', rating: '', status: '', createdAt: new Date(), updatedAt: new Date() },
      { userId: '', bookId: '', review: '', rating: '', status: '', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserBooks', null, {});
  }
};
