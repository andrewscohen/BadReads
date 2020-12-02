"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Publishers", [
      {
        name: "Scholastic Incorporated",
        location: "New York, New York",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Penguin Random House LLC",
        location: "New York, New York",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Little,Brown & Company",
        location: "Boston, Massachusetts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Random House Vintage Books",
        location: "New York, New York",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nosy Crow",
        location: "London, United Kingdom",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Publishers", null, {});
  },
};
