"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordt: DataTypes.STRING,
      reset_token: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      tableName: "Users",
      modelName: "Users",
    }
  );
  return Users;
};
