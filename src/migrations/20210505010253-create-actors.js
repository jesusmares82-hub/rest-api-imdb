"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Actors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      dob: {
        type: Sequelize.DATE,
      },
      biography: {
        type: Sequelize.TEXT,
      },
      profile_photo: {
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
    await queryInterface.dropTable("actors");
  },
};
