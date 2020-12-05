const express = require("express");
const { db, asyncHandler } = require("./utils.js");
const { requireAuth } = require("../auth.js");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const userId = await parseInt(req.session.auth.userId);
    const userBookInfo = await db.User.findByPk(userId, {
      include: [
        {
          model: db.Book,
          through: { attributes: ["rating", "review", "status"] },
        },
      ],
    });
    res.render("bookshelf", { userBookInfo });
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

router.get(
  "/:status",
  asyncHandler(async (req, res) => {
    const bookStatus = req.params.status

    const status = await db.UserBook.findAll(
      {
        where : {status: bookStatus}
      }
    )
    // if (bookStatus === "/read") {
    //    await db.UserBook.findAll(
    //     {
    //       where: {status: "Have Read"}
    //     }
    //   )
    // }
    // if (bookStatus === "/currentlyReading") {
    //   await db.UserBook.findAll(
    //     {
    //       where: {status: "Reading"}
    //     }
    //   )

    // }
    // if (bookStatus === "unread") {
    //   await db.UserBook.findAll(
    //     {
    //       where: {status: "Want To Read"}
    //     }
    //   )
    // }
    // else {
    //   await db.UserBook.findAll()
    // }
    res.render("bookshelf", { status });
})
)


module.exports = router;
