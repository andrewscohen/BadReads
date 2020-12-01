'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define('BookAuthor', {
    bookId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {});
  BookAuthor.associate = function(models) {
    // associations can be defined here
  };
  return BookAuthor;
};