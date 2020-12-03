'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    releaseDate: DataTypes.DATE,
    pageCount: DataTypes.INTEGER,
    publisherId: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    Book.belongsTo(models.Publisher,{foreignKey:"publisherId"});

    const bookAuthorMap = {
      foreignKey: "bookId",
      through: "BookAuthor",
      otherKey: "authorId"
    }

    const bookGenreMap = {
      foreignKey: "bookId",
      through: "BookGenre",
      otherKey: "genreId"
    }

    const userBookMap = {
      foreignKey: "bookId",
      through: "UserBook",
      otherKey: "userId"
    }

    Book.belongsToMany(models.User, userBookMap);
    Book.belongsToMany(models.Author, bookAuthorMap);
    Book.belongsToMany(models.Genre, bookGenreMap);

};
return Book;
}
