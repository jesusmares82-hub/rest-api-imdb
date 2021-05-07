"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
      this.hasMany(models.ContentActors, {
        foreignKey: "actor_id",
      });
    }
  }
  Actors.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      dob: DataTypes.DATE,
      biography: DataTypes.TEXT,
      profile_photo: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Actors",
      tableName: "Actors",
      underscored: true,
    }
  );
  return Actors;
};
