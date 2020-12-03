const express = require("express");
const { db } = require("./validators");
const { asyncHandler } = require("./index");

const router = express.Router();

router.get("/:id", asyncHandler(async(req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const bookInfo = await db.Book.findByPk(bookId, {
        include: [
            {
                model: db.Author,
                through: { attributes: [] }
            },
            {
                model: db.Genre,
                through: { attributes: [] }
            },
            { model: db.Publisher }
        ]
    });
    res.render('book-info', { bookInfo });
    // res.json( { bookInfo });
}));

module.exports = router;
