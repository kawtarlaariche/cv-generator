'use strict';
module.exports = (sequelize, DataTypes) => {
  const adress = sequelize.define('adress', {
    street: DataTypes.STRING,
    numStreet: DataTypes.INTEGER,
    postaleCode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  adress.associate = function(models) {
    // associations can be defined here
  };
  return adress;
};