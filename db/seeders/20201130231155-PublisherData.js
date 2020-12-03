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
      {
        name: "The Writer’s Coffee Shop (TWCS) Publishing House",
        location: "New South Wales, Australia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charles Scribner's Sons",
        location: "New York, New York",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Harper Collins Publishers LLC",
        location: "New York, New York",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Simon & Schuster Publishing",
        location: "New York, New York",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trash Factory",
        location: "Earth, Twenty Twenty",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "J'ne Compre Pa & Sons Publishing LLC.",
        location: "Tokyo, Japan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Publishers");
  },
};
