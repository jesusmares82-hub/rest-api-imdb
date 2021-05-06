"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ContentGenres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      genre_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Genres",
          key: "id",
        },
      },
      content_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contents",
          key: "id",
        },
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
    await queryInterface.dropTable("ContentGenres");
  },
};
