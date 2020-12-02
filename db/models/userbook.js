'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('UserBook', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  UserBook.associate = function(models) {
    // associations can be defined here
  };
  return UserBook;
};
