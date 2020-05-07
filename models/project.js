'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    description: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User, {
      foreignKey: "users_id",
      as: "user"
    })
  };
  return Project;
};