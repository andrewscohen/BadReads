"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Books", [
      {
        name: "Twilight",
        description:
          "Twilight is about a young girl getting gaslit into believing her life is worth throwing away for a shimmery vampire.",
        pageCount: "501",
        publisherId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New Moon",
        description: "the 2nd Twilight book",
        pageCount: "563",
        publisherId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eclipse",
        description: "the 3nd Twilight book",
        pageCount: "629",
        publisherId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Breaking Dawn",
        description: "the 4th Twilight book",
        pageCount: "756",
        publisherId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Midnight Sun",
        description: "the 5th Twilight book",
        pageCount: "662",
        publisherId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fifty Shades of Grey",
        description: "the 1st Fifty Shades Book",
        pageCount: "356",
        publisherId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fifty Shades Darker",
        description: "the 2nd Fifty Shades Book",
        pageCount: "532",
        publisherId: "6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fifty Shades Freed",
        description: "the 3rd Fifty Shades Book",
        pageCount: "579",
        publisherId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "The Great Gatsby",
        description: "This is a book. Read it or Don't",
        pageCount: "200",
        publisherId: "7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grendel",
        description: "The reversed roll book about Beowulf and Grendel...why?",
        pageCount: "174",
        publisherId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
