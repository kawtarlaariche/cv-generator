'use strict';
module.exports = (sequelize, DataTypes) => {
  const language = sequelize.define('language', {
    name: DataTypes.STRING,
    level: DataTypes.STRING
  }, {});
  language.associate = function(models) {
    // associations can be defined here
  };
  return language;
};