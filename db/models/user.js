'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING.BINARY
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Book, {through:models.UserBook})
    User.belongsToMany(models.User, {as:'friendId', through:models.Friend})

  };
  return User;
};
