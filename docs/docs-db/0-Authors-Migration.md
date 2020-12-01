# Authors Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name Author --attributes name:string
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Authors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(75),
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
    return queryInterface.dropTable("Authors");
  },
};
```

## Models File Code

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    Author.hasMany(models.BookAuthor{foreignKey: "authorId"})
    Author.hasMany(models.AuthorGenre{foreignKey: "authorId"})
  };
  return Author;
};
```
