const express = require("express");
const { db, asyncHandler } = require("./utils.js");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const books = await db.Book.findAll();
    const genres = await db.Genre.findAll();
    res.render("home", { title: "Bad Reads", books, genres });
  })
);


module.exports = router;
