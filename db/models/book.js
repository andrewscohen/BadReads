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

    Book.belongsToMany(models.User,{through: models.UserBook})
    Book.belongsToMany(models.Author,{through: models.BookAuthor})
    Book.belongsToMany(models.Genre,{through: models.BookGenre})

};
return Book;
}
