"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Authors", [
      { name: "Stephanie Meyer", createdAt: new Date(), updatedAt: new Date() },
      { name: "E.L. James", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "F. Scott Fitzgerald",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "John Gardner", createdAt: new Date(), updatedAt: new Date() },
      { name: "Justin Bieber", createdAt: new Date(), updatedAt: new Date() },
      {
        name: 'Nicole "Snooki" Polizzi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Morgan Maxwel", createdAt: new Date(), updatedAt: new Date() },
      { name: "Matt Zhang", createdAt: new Date(), updatedAt: new Date() },
      { name: "Amelia Pond", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Christopher Perch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { name: "Misty Rivers", createdAt: new Date(), updatedAt: new Date() },
      { name: "Yael Amari", createdAt: new Date(), updatedAt: new Date() },
      { name: "Serene Wright", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kurt Yamashita", createdAt: new Date(), updatedAt: new Date() },
      { name: "Amanda Stewarts", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kim Chun Hei", createdAt: new Date(), updatedAt: new Date() },
      { name: "Hannah Morales", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Authors", null, {});
  },
};
