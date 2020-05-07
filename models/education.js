'use strict';
module.exports = (sequelize, DataTypes) => {
  const Education = sequelize.define('Education', {
    dateDebut: DataTypes.DATE,
    dateFin: DataTypes.DATE,
    description: DataTypes.STRING,
    users_id: DataTypes.INTEGER
  }, {});
  Education.associate = function(models) {
    // associations can be defined here
    Education.belongsTo(models.User, {
      foreignKey: "users_id",
      as: "user"
    })
  };
  return Education;
};