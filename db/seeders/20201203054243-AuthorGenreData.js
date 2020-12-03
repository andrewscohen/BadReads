'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('AuthorGenres', [
        {authorId:'1', genreId:'12',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'1', genreId:'14',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'1', genreId:'16',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'2', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'3', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'4', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'5', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'6', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'7', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'8', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'9', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'10', genreId:'',createdAt: new Date(), updatedAt: new Date()},
        {authorId:'11', genreId:'',createdAt: new Date(), updatedAt: new Date()}
        {authorId:'12', genreId:'',createdAt: new Date(), updatedAt: new Date()}
        {authorId:'13', genreId:'',createdAt: new Date(), updatedAt: new Date()}
        {authorId:'14', genreId:'',createdAt: new Date(), updatedAt: new Date()}
        {authorId:'15', genreId:'',createdAt: new Date(), updatedAt: new Date()}
        {authorId:'16', genreId:'',createdAt: new Date(), updatedAt: new Date()}
        {authorId:'17', genreId:'',createdAt: new Date(), updatedAt: new Date()}
      ])
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('AuthorGenres');

  }
};
