'use strict';
module.exports = (sequelize, DataTypes) => {
  const experience = sequelize.define('experience', {
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    description: DataTypes.STRING
  }, {});
  experience.associate = function(models) {
    // associations can be defined here
  };
  return experience;
};