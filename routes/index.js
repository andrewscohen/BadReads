const express = require("express");
const csrf = require("csrf");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

const signupValidators = [
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for User Name")
    .isLength({ max: 250 })
    .withMessage("User Name must not be more than 150 characters long"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address")
    .isLength({ max: 250 })
    .withMessage("Email Address must not be more than 255 characters long")
    .isEmail()
    .withMessage("Email Address is not a valid email")
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } }).then(
        (user) => {
          if (user) {
            return Promise.reject(
              "The provided Email Address is already in use by another account"
            );
          }
        }
      );
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long"),
  check("confirmPassword")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Confirm Password")
    .isLength({ max: 50 })
    .withMessage("Confirm Password must not be more than 50 characters long")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Confirm Password does not match Password");
      }
      return true;
    }),
];

const loginValidators = [
  check("emailAddress")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Email Address"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a value for Password"),
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "a/A Express Skeleton Home" });
});

module.exports = {
  express,
  router,
  csrfProtection,
  asyncHandler,
  loginValidators,
  signupValidators,
  validationResult,
};
