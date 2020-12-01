# Book Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name Book --attributes name:string,description:text,releaseDate:date,pageCount:integer,publisherId:integer
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(150),
      },
      description: {
        type: Sequelize.TEXT,
      },
      releaseDate: {
        type: Sequelize.DATE,
      },
      pageCount: {
        type: Sequelize.INTEGER,
      },
      publisherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Publishers" },
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
    return queryInterface.dropTable("Books");
  },
};
```

## Models File Code

```javascript
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
    Book.belongsTo(Models.Publisher{foreignKey:"publisherId"});
    Book.hasMany(Models.BookAuthor{foreignKey:"bookId"});
    Book.hasMany(Models.BookGenre{foreignKey:"bookId"});

  };
  return Book;
};
```
