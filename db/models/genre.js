'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    Genre.belongsToMany(models.Author,{through: models.AuthorGenre})
    Genre.belongsToMany(models.Book,{through: models.BookGenre})
  };
  return Genre;
};
