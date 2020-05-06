'use strict';
module.exports = (sequelize, DataTypes) => {
  const education = sequelize.define('education', {
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    description: DataTypes.STRING
  }, {});
  education.associate = function(models) {
    // associations can be defined here
  };
  return education;
};