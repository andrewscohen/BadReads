# BookGenres Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name BookGenre --attributes bookId:integer,genreId:integer
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BookGenres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bookId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Books" },
      },
      genreId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Genres" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("BookGenres");
  },
};
```

## Models File Code

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookGenre = sequelize.define('BookGenre', {
    bookId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  BookGenre.associate = function(models) {
      BookGenre.belongsTo(Models.Book{foreignKey:"bookId"});
      BookGenre.belongsTo(Models.Genre{foreignKey:"genreId"});
  };
  return BookGenre;
};
```
