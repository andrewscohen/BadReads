'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthorGenre = sequelize.define('AuthorGenre', {
    authorId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  AuthorGenre.associate = function(models) {
    // associations can be defined here
  };
  return AuthorGenre;
};