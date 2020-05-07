'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth: DataTypes.DATE,
    placeBirth: DataTypes.STRING,
    nationality: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.BLOB,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    website: DataTypes.STRING,
    profile: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};