# Genres Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name Genre --attributes name:string
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Genres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true,
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
    return queryInterface.dropTable("Genres");
  },
};
```

## Models File Code

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
   Genre.hasMany(models.AuthorGenre{foreignKey:"genreId"})
   Genre.hasMany(models.BookGenre{foreignKey:"genreId"})
  };
  return Genre;
};
```
