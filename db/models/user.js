'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING.BINARY
  }, {});
  User.associate = function (models) {
    const userToUserMap = {
      foreignKey: "userId",
      through: models.Friend,
      otherKey: "friendId",
      as: "friends"
    }
    const userBookMap = {
      foreignKey: "userId",
      through: "UserBook",
      otherKey: "bookId"
    }

    User.belongsToMany(models.Book, userBookMap)
    User.belongsToMany(models.User, userToUserMap)

  };
  return User;
};
