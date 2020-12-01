# Friends Table

---

## Migration Generate Code

```javascript
npx sequelize-cli model:generate --name Friend --attributes userId:integer,friendId:integer
```

## Migration File Code

```javascript
"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Friends", {
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
      friendId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
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
    return queryInterface.dropTable("Friends");
  },
};
```

## Models File Code

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {});
  Friend.associate = function(models) {
      Friend.hasMany(Models.User{foreignKey:"userId"});
  };
  return Friend;
};
```
