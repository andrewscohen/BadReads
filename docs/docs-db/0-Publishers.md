# Publishers Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name Publisher --attributes name:string,location:string
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Publishers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(75),
        unique: true,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING(100),
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
    return queryInterface.dropTable("Publishers");
  },
};
```

## Models File Code

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define('Publisher', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Publisher.associate = function(models) {
    Publisher.hasMany(models.Book{foreignKey:"publisherId"})
  };
  return Publisher;
};
```
