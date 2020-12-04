const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { asyncHandler } = require("./utils");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const books = await db.Book.findAll();
    res.render("home", { title: "Bad Reads", books });
  })
);

module.exports = router;
