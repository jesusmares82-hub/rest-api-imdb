"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      total_seasons: {
        type: Sequelize.INTEGER,
      },
      imdb_score: {
        type: Sequelize.DECIMAL,
      },
      relase_date: {
        type: Sequelize.STRING,
      },
      play_time: {
        type: Sequelize.INTEGER,
      },
      imdb_link: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        underscored: true,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        underscored: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Contents");
  },
};
