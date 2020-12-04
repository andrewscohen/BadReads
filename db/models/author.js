'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING
  }, {});
  Author.associate = function(models) {

    const bookAuthorMap = {
      foriegnKey: "authorId",
      through: "BookAuthor",
      otherKey: "bookId"
    }

    const authorGenreMap = {
      foreignKey: "authorId",
      through: "AuthorGenre",
      otherKey: "genreId"
    }

    Author.belongsToMany(models.Book, bookAuthorMap);
    Author.belongsToMany(models.Genre, authorGenreMap);
};
return Author;
};
