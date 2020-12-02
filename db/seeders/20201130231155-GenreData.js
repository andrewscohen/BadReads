'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {name:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', createdAt: new Date(),updatedAt: new Date()}
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
