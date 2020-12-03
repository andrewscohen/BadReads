'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('AuthorGenres', [
        {authorId:1, genreId:3,createdAt: new Date(), updatedAt: new Date()},
        {authorId:1, genreId:8,createdAt: new Date(), updatedAt: new Date()},
        {authorId:1, genreId:16,createdAt: new Date(), updatedAt: new Date()},
        {authorId:2, genreId:3,createdAt: new Date(), updatedAt: new Date()},
        {authorId:2, genreId:8,createdAt: new Date(), updatedAt: new Date()},
        {authorId:3, genreId:5,createdAt: new Date(), updatedAt: new Date()},
        {authorId:3, genreId:12,createdAt: new Date(), updatedAt: new Date()},
        {authorId:4, genreId:5,createdAt: new Date(), updatedAt: new Date()},
        {authorId:4, genreId:13,createdAt: new Date(), updatedAt: new Date()},
        {authorId:5, genreId:3,createdAt: new Date(), updatedAt: new Date()},
        {authorId:5, genreId:16,createdAt: new Date(), updatedAt: new Date()},
        {authorId:6, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:6, genreId:6,createdAt: new Date(), updatedAt: new Date()},
        {authorId:7, genreId:1,createdAt: new Date(), updatedAt: new Date()},
        {authorId:7, genreId:5,createdAt: new Date(), updatedAt: new Date()},
        {authorId:7, genreId:7,createdAt: new Date(), updatedAt: new Date()},
        {authorId:8, genreId:5,createdAt: new Date(), updatedAt: new Date()},
        {authorId:8, genreId:11,createdAt: new Date(), updatedAt: new Date()},
        {authorId:9, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:9, genreId:10,createdAt: new Date(), updatedAt: new Date()},
        {authorId:10, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:10, genreId:10,createdAt: new Date(), updatedAt: new Date()},
        {authorId:11, genreId:5,createdAt: new Date(), updatedAt: new Date()},
        {authorId:11, genreId:10,createdAt: new Date(), updatedAt: new Date()},
        {authorId:12, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:12, genreId:13,createdAt: new Date(), updatedAt: new Date()},
        {authorId:13, genreId:1,createdAt: new Date(), updatedAt: new Date()},
        {authorId:13, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:14, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:14, genreId:13,createdAt: new Date(), updatedAt: new Date()},
        {authorId:15, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:15, genreId:16,createdAt: new Date(), updatedAt: new Date()},
        {authorId:16, genreId:1,createdAt: new Date(), updatedAt: new Date()},
        {authorId:16, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:17, genreId:4,createdAt: new Date(), updatedAt: new Date()},
        {authorId:17, genreId:5,createdAt: new Date(), updatedAt: new Date()}
      ])
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('AuthorGenres');

  }
};
