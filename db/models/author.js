'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    Author.belongsToMany(models.Book,{through: models.BookAuthor})
    Author.belongsToMany(models.Genre,{through: models.AuthorGenre})
};
return Author;
};
