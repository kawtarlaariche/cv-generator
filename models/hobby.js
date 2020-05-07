'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobby = sequelize.define('Hobby', {
    description: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {});
  Hobby.associate = function(models) {
    // associations can be defined here
    Hobby.belongsTo(models.User, {
      foreignKey: "users_id",
      as: "user"
    })
  };
  return Hobby;
};