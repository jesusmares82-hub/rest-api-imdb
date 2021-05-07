"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentGenres extends Model {
    static associate(models) {
      this.belongsTo(models.Genres, {
        foreignKey: "genre_id",
      });
      this.belongsTo(models.Contents, {
        foreignKey: "content_id",
      });
    }
  }
  ContentGenres.init(
    {
      genre_id: DataTypes.INTEGER,
      content_id: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ContentGenres",
      tableName: "ContentGenres",
      underscored: true,
    }
  );
  return ContentGenres;
};
