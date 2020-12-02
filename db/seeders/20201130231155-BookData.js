'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {name:'', description:'', pageCount: '', publisherId:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', description:'', pageCount: '', publisherId:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', description:'', pageCount: '', publisherId:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', description:'', pageCount: '', publisherId:'', createdAt: new Date(),updatedAt: new Date()},
        {name:'', description:'', pageCount: '', publisherId:'', createdAt: new Date(),updatedAt: new Date()}
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
