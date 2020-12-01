# AuthorGenres Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name AuthorGenre --attributes authorId:integer,genreId:integer
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("AuthorGenres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Authors" },
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
    return queryInterface.dropTable("AuthorGenres");
  },
};
```

## Models File Code

```javascript
"use strict";
module.exports = (sequelize, DataTypes) => {
  const AuthorGenre = sequelize.define(
    "AuthorGenre",
    {
      authorId: DataTypes.INTEGER,
      genreId: DataTypes.INTEGER,
    },
    {}
  );
  AuthorGenre.associate = function (models) {
    AuthorGenre.belongsTo(models.Author, { foreignKey: "authorId" });
    AuthorGenre.belongsTo(models.Genre, { foreignKey: "genreId" });
  };
  return AuthorGenre;
};
```
