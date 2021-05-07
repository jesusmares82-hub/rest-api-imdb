"use strict";

const today = new Date();

const directors = [
  {
    firstname: "James",
    lastname: "Mangold",
    dob: "1963-12-16",
    biography:
      "James Mangold is an American film and television director, screenwriter and producer. Films he has directed include Inocencia interrumpida (1999), En la cuerda floja (2005), which he also co-wrote, the 2007 remake El tren de las 3:10 (2007), Lobezno inmortal (2013), and Logan (2017).",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BMTg5MjY0ODg1MF5BMl5BanBnXkFtZTYwMjUzMjc0._V1_UX214_CR0,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
  {
    firstname: "Jay",
    lastname: "Chou",
    dob: "1979-01-18",
    biography:
      "Jay Chou is a Taiwanese musician, singer-songwriter, multi-instrumentalist, actor and director. He was born in Taipei to schoolteachers, Yeh Hui-Mei, who taught fine arts, and Chou Yao-Chung, a biomedical researcher. In 2000, Chou released his first album, titled Jay (2000), under the record company Alfa Music.",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BMTgwNTEyMzUzMV5BMl5BanBnXkFtZTcwOTY2MDIzNA@@._V1_UY317_CR10,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
  {
    firstname: "James",
    lastname: "Cameron",
    dob: "1954-08-16",
    biography:
      "James Francis Cameron was born on August 16, 1954 in Kapuskasing, Ontario, Canada. He moved to the United States in 1971. The son of an engineer, he majored in physics at California State University before switching to English, and eventually dropping out. He then drove a truck to support his screenwriting ambition.",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BMjI0MjMzOTg2MF5BMl5BanBnXkFtZTcwMTM3NjQxMw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
  {
    firstname: "Pier",
    lastname: "Pasolini",
    dob: "1960-10-12",
    biography:
      "Pier Paolo Pasolini achieved fame and notoriety long before he entered the film industry. A published poet at 19, he had already written numerous novels and essays before his first screenplay in 1954. His first film Accattone (1961) was based on his own novel and its violent depiction of the life of a pimp in the slums of Rome caused a sensation.",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BMjMyOTk0NjU3OF5BMl5BanBnXkFtZTcwNzMwMDgxOA@@._V1_UY317_CR8,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
  {
    firstname: "Stanley",
    lastname: "Kubrick",
    dob: "1928-06-26",
    biography:
      "Stanley Kubrick was born in Manhattan, New York City, to Sadie Gertrude (Perveler) and Jacob Leonard Kubrick, a physician. His family were Jewish immigrants (from Austria, Romania, and Russia). Stanley was considered intelligent, despite poor grades at school.",
    profile_photo:
      "https://m.media-amazon.com/images/M/MV5BMTIwMzAwMzg1MV5BMl5BanBnXkFtZTYwMjc4ODQ2._V1_UX214_CR0,0,214,317_AL_.jpg",
    active: true,
    created_at: today,
    updated_at: today,
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Directors", directors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Directors", null, {});
  },
};
