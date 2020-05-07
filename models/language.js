'use strict';
module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    name: DataTypes.STRING,
    level: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {});
  Language.associate = function(models) {
    // associations can be defined here
    Language.belongsTo(models.User, {
      foreignKey: "users_id",
      as: "user"
    })
  };
  return Language;
};