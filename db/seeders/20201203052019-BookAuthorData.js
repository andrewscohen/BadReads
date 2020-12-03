"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("BookAuthors", [
      { bookId: 1, authorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 2, authorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 3, authorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 4, authorId: 1, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 5, authorId: 1, createdAt: new Date(), updatedAt: new Date() },

      { bookId: 6, authorId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 7, authorId: 2, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 8, authorId: 2, createdAt: new Date(), updatedAt: new Date() },

      { bookId: 9, authorId: 3, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 10, authorId: 4, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 11, authorId: 5, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 12, authorId: 6, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 13, authorId: 7, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 14, authorId: 8, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 15, authorId: 9, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 16, authorId: 10, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 17, authorId: 11, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 18, authorId: 8, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 19, authorId: 12, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 20, authorId: 13, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 21, authorId: 14, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 22, authorId: 15, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 23, authorId: 16, createdAt: new Date(), updatedAt: new Date() },
      { bookId: 24, authorId: 17, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("BookAuthors");
  },
};
