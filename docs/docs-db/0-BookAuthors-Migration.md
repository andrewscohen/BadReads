# BooksAuthors Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name BookAuthor --attributes bookId:integer,authorId:integer
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BookAuthors", {
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
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Authors" },
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
    return queryInterface.dropTable("BookAuthors");
  },
};
```

## Models File Code

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define('BookAuthor', {
    bookId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {});
  BookAuthor.associate = function(models) {
     BookAuthor.belongsTo(Models.Book{foreignKey:"bookId"});
     BookAuthor.belongsTo(Models.Author{foreignKey:"authorId"});
  };
  return BookAuthor;
};
```
