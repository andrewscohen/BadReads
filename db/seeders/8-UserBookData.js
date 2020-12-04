'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('UserBooks', [
        {userId:1,
          bookId:1,
          review: "bad",
          rating: 5,
          status: "read",
        createdAt: new Date(),
        updatedAt: new Date(),}
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserBooks');
  }
};
