"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentDirectors extends Model {
    
    static associate(models) {
      this.belongsTo(models.Directors, {
        foreignKey: "director_id",
      });
      this.belongsTo(models.Contents, {
        foreignKey: "content_id",
      });
    }
  }
  ContentDirectors.init(
    {
      director_id: DataTypes.INTEGER,
      content_id: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ContentDirectors",
      tableName: "ContentDirectors",
      underscored: true,
    }
  );
  return ContentDirectors;
};
