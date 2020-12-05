const express = require("express");
const { db, asyncHandler } = require("./utils.js");
const { requireAuth } = require("../auth.js");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const userId = await parseInt(req.session.auth.userId);
    const genres = await db.Genre.findAll();
    const userBookInfo = await db.User.findByPk(userId, {
      include: [
        {
          model: db.Book,
          through: { attributes: ["rating", "review", "status"] },
        },
      ],
    });


    res.render("bookshelf", { userBookInfo, genres });
  })
);

router.post(
  "/:bookId",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { review, rating, status } = req.body;
    const userId = await parseInt(req.session.auth.userId);
    const bookId = parseInt(req.params.bookId, 10);
    const userBook = await db.UserBook.findOne({
      where: { userId, bookId },
    });
    console.log(userBook);
    if (userBook) {
      userBook.status = status;
      userBook.review = review;
      userBook.rating = rating;
      await userBook.save();
    } else {
      await db.UserBook.create({
        userId,
        bookId,
        review,
        rating,
        status,
      });
    }
  })
);

module.exports = router;
