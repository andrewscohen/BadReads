const express = require("express");
const { db, asyncHandler } = require("./utils.js");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const genres = await db.Genre.findAll();
    const books = await db.Book.findAll();
    res.render("home", { title: "Bad Reads", books, genres });
    // res.json(genres)
  })
);

router.get(
  "/genreFilter",
  asyncHandler(async (req, res) => {
    const { genreId } = req.query;
    const genres = await db.Genre.findAll();

    const books = await db.Book.findAll({
      include: [
        {
          model: db.Genre,
          where: { id: genreId },
          through: { attributes: ["genreId"] },
        },
      ],
    });
    const genre = await db.Genre.findByPk(genreId);
    const genreName = genre.name;

    res.render("home", { title: "Bad Reads", books, genres, genreName });
    // res.json({genreName})
  })
);
module.exports = router;
