'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth: DataTypes.DATE,
    placeBirth: DataTypes.STRING,
    nationality: DataTypes.STRING,
    image: DataTypes.BLOB,
    linkedin: DataTypes.STRING,
    instagram: DataTypes.STRING,
    facebook: DataTypes.STRING,
    website: DataTypes.STRING,
    profile: DataTypes.STRING,
    adresses_id: DataTypes.INTEGER,
    educations_id: DataTypes.INTEGER,
    experiences_id: DataTypes.INTEGER,
    projects_id: DataTypes.INTEGER,
    hobbies_id: DataTypes.INTEGER,
    langues_id: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.belongsTo(models.adress,{
      foreignkey:"adresses_id",
      as: "adress"
    });
    user.belongsTo(models.education,{
      foreignkey:"educations_id",
      as: "education"
    });
    user.belongsTo(models.experience,{
      foreignkey:"experiences_id",
      as: "experience"
    });
    user.belongsTo(models.project,{
      foreignkey:"projects_id",
      as: "project"
    });
    user.belongsTo(models.hobby,{
      foreignkey:"hobbies_id",
      as: "hobby"
    });
    user.belongsTo(models.langue,{
      foreignkey:"langues_id",
      as: "language"
    });
  };
  return user;
};