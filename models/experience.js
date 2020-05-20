'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    company:DataTypes.STRING,
    title:DataTypes.STRING,
    description: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {});
  Experience.associate = function(models) {
    // associations can be defined here
    Experience.belongsTo(models.User, {
      foreignKey: "users_id",
      as: "user"
    })
  };
  return Experience;
};