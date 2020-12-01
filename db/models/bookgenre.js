'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookGenre = sequelize.define('BookGenre', {
    bookId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  BookGenre.associate = function(models) {
    // associations can be defined here
  };
  return BookGenre;
};