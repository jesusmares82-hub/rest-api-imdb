"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Validate_Accounts extends Model {
    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: "user_id",
      });
    }
  }
  Validate_Accounts.init(
    {
      hash: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Validate_Accounts",
      tableName: "Validate_Accounts",
      underscored: true,
    }
  );
  return Validate_Accounts;
};
