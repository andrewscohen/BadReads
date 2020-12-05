const express = require("express");
const { db } = require("./validators.js");
const { asyncHandler } = require("./utils.js");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const bookInfo = await db.Book.findByPk(bookId, {
      include: [
        {
          model: db.Author,
          through: { attributes: [] },
        },
        {
          model: db.Genre,
          through: { attributes: [] },
        },
        { model: db.Publisher },
      ],
    });
    res.render("book-info", { bookInfo });
  })
);

module.exports = router;
