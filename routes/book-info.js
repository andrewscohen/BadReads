const express = require("express");
const { db, asyncHandler } = require("./utils.js");

const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const genres = await db.Genre.findAll();
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

    res.render("book-info", { bookInfo,genres });
  })
);

module.exports = router;
