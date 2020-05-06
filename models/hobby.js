'use strict';
module.exports = (sequelize, DataTypes) => {
  const hobby = sequelize.define('hobby', {
    description: DataTypes.STRING
  }, {});
  hobby.associate = function(models) {
    // associations can be defined here
  };
  return hobby;
};