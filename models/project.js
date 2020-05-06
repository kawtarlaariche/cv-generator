'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    description: DataTypes.STRING
  }, {});
  project.associate = function(models) {
    // associations can be defined here
  };
  return project;
};