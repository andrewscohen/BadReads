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
    // associations can be defined here
  };
  return Book;
};