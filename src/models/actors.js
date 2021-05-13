"use strict";
const { Model, DATEONLY } = require("sequelize");
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
      firstname: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          isAlpha: true,
          len: [0, 50],
        },
      },
      lastname: DataTypes.STRING,
      dob: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
        },
      },
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
