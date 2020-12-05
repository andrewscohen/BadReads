const express = require("express");
const { db, asyncHandler } = require("./utils.js");

const router = express.Router();

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
  })
);

module.exports = router;
