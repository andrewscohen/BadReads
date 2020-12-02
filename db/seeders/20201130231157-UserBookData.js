'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [
        {userId:'', bookId: '', review:'', rating:'',status:'', createdAt: new Date(),updatedAt: new Date()},
        {userId:'', bookId: '', review:'', rating:'',status:'', createdAt: new Date(),updatedAt: new Date()},
        {userId:'', bookId: '', review:'', rating:'',status:'', createdAt: new Date(),updatedAt: new Date()},
        {userId:'', bookId: '', review:'', rating:'',status:'', createdAt: new Date(),updatedAt: new Date()},
        {userId:'', bookId: '', review:'', rating:'',status:'', createdAt: new Date(),updatedAt: new Date()}
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
