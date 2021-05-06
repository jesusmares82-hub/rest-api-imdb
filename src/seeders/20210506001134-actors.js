"use strict";

const today = new Date();

const actors = [
  {
    firstname: "Will",
    lastname: "Smith",
    dob: "1968-09-25",
    biography:
      "Willard Carroll Smith, Jr.​​, ​​ más conocido como Will Smith, es un actor, rapero, productor de cine, productor de televisión y productor discográfico estadounidense,",
    profile_photo:
      "https://commons.wikimedia.org/wiki/File:Will_Smith_by_Gage_Skidmore_2.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Actors", actors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Actors", null, {});
  },
};
