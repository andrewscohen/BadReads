const express = require("express");
const csrf = require("csrf");
const router = express.Router();

const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

router.get("/", function (req, res, next) {
  res.render("index", { title: "a/A Express Skeleton Home" });
});

module.exports = {
  express,
  router,
  csrfProtection,
  asyncHandler,
};
