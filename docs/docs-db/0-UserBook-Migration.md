# UserBook Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name UserBook --attributes userId:integer,bookId:integer,review:text,rating:integer,status:boolean
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UserBooks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      bookId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Books" },
      },
      review: {
        type: Sequelize.TEXT,
      },
      rating: {
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
    return queryInterface.dropTable("UserBooks");
  },
};
```

## Models File Code

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('UserBook', {
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  UserBook.associate = function(models) {
    UserBook.belongsTo(models.User{foreignKey:"userId"})
    UserBook.belongsTo(models.Book{foreignKey:"bookId"})
  };
  return UserBook;
};
```
