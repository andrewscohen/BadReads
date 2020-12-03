"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "BookGenres",[
        { bookId: 1, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        {
          bookId: 1,
          genreId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { bookId: 2, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        {
          bookId: 2,
          genreId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { bookId: 3, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        {
          bookId: 3,
          genreId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { bookId: 4, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        {
          bookId: 4,
          genreId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { bookId: 5, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        {
          bookId: 5,
          genreId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { bookId: 6, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        { bookId: 6, genreId: 8, createdAt: new Date(), updatedAt: new Date() },
        { bookId: 7, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        { bookId: 7, genreId: 8, createdAt: new Date(), updatedAt: new Date() },
        { bookId: 8, genreId: 3, createdAt: new Date(), updatedAt: new Date() },
        { bookId: 8, genreId: 8, createdAt: new Date(), updatedAt: new Date() },
        { bookId: 9, genreId: 5, createdAt: new Date(), updatedAt: new Date() },
        {
          bookId: 9,
          genreId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 10,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 10,
          genreId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 11,
          genreId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 11,
          genreId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 12,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 12,
          genreId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 13,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 13,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 13,
          genreId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 14,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 14,
          genreId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 15,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 15,
          genreId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 16,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 16,
          genreId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 17,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 17,
          genreId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 18,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 18,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 19,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 19,
          genreId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 20,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 20,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 21,
          genreId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 21,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 22,
          genreId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 22,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 23,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 23,
          genreId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 24,
          genreId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 24,
          genreId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("BookGenres");
  },
};
