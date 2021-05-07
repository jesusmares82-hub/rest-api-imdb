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
  {
    firstname: "Ben",
    lastname: "Jorgensen",
    dob: "1969-06-30",
    biography:
      " He was an actor and editor, known for Diario de un rebelde (1995), As the World Turns (1956) and Chelsea International (2016). He died on October 6, 2020 in New York, New York, USA.<",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BOTI5MWNmZTUtMDJhNy00MTJmLWE4YTgtOWU3ZWUwN2I5MTQ1XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY317_CR23,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
  {
    firstname: "Peter",
    lastname: "Jensen",
    dob: "1956-04-08",
    biography:
      "He is a producer and actor, known for Rompiendo las olas (1996), Misericordia: Los casos del Departamento Q (2013) and Melancolía (2011). He has been married to Lise Palm since September 17, 1983.",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BMmJiNDFlNmEtYjg4MC00MjBkLTkxNGEtNmJiYWVjNWJiYjAxXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_UY317_CR107,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
  {
    firstname: "Hiroyuki",
    lastname: "Sanada",
    dob: "1960-10-12",
    biography:
      "He made his film debut when he was 5 in Rokyoku komori-uta (1965) (Shin'ichi Chiba played the lead role.) His father died when he was 11. He joined Japan Action Club, organized & run by Sonny Chiba, when he was 12. He 1st became famous as an action star for his role in Kang samurai (1978).",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BMjE2MzY0NTM1Ml5BMl5BanBnXkFtZTcwNzQzNzMyMw@@._V1_UY317_CR46,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
  {
    firstname: "Hugh",
    lastname: "Jackman",
    dob: "1968-10-12",
    biography:
      "He is an Australian actor, singer, multi-instrumentalist, dancer and producer. Jackman has won international recognition for his roles in major films, notably as superhero, period, and romance characters. He is best known for his long-running role as Wolverine in the X-Men film series.",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UX214_CR0,0,214,317_AL_.jpg",
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
