const express = require("express");
const { db } = require("./validators");
const { asyncHandler } = require("./utils.js");

const router = express.Router();

//get
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userBookInfo = await db.User.findByPk(userId, {
      include: [
        {
          model: db.Book,
          through: { attributes: ["rating", "review", "status"] },
        },
      ],
    });
    res.render("bookshelf", { userBookInfo });
    // res.json(userBookInfo);
  })
);

module.exports = router;
