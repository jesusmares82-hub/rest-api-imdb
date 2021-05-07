"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    static associate(models) {
      this.hasMany(models.ContentActors, {
        foreignKey: "content_id",
      });
      this.hasMany(models.ContentGenres, {
        foreignKey: "content_id",
      });
      this.hasMany(models.ContentDirectors, {
        foreignKey: "content_id",
      });
    }
  }
  Contents.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      total_seasons: DataTypes.INTEGER,
      imdb_score: DataTypes.DECIMAL,
      relase_date: DataTypes.STRING,
      play_time: DataTypes.INTEGER,
      imdb_link: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Contents",
      tableName: "Contents",
      underscored: true,
    }
  );
  return Contents;
};
