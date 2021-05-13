"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasOne(models.Validate_Accounts, {
        foreignKey: "user_id",
      });
    }
  }
  Users.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      reset_token: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "Users",
      modelName: "Users",
      underscored: true,
    }
  );
  return Users;
};
