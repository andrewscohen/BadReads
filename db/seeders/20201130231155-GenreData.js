'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      { name: 'Horror', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Action', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Romance', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Non-Fiction', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fiction', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Crime', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Childrens', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fantasy', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Young-Adult-Fiction', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Self-Help', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Instruction', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Business-And-Economics', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alternative-Facts', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Paranormal-Country-Music', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Millennial', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Actual Basura', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Genres', null, {});
  }
};
