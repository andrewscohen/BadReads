'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {userName:'', email:'', password: '', createdAt: new Date(),updatedAt: new Date()},
        {userName:'', email:'', password: '', createdAt: new Date(),updatedAt: new Date()},
        {userName:'', email:'', password: '', createdAt: new Date(),updatedAt: new Date()},
        {userName:'', email:'', password: '', createdAt: new Date(),updatedAt: new Date()},
        {userName:'', email:'', password: '', createdAt: new Date(),updatedAt: new Date()}
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
