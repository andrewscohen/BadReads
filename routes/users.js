const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const { AuthloginUser, logoutUser } = require("../auth.js");
const { csrfProtection, asyncHandler } = require("./utils.js");
const {
  db,
  validationResult,
  loginValidators,
  signupValidators,
} = require("./validators");

const checkPassword = async (req, res, user, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();
  AuthloginUser(req, res, user);
  res.redirect("/");
};

const validatePassword = async (req, res, user, password) => {
  if (user) {
    const passwordMatch = await bcrypt.compare(
      password,
      user.password.toString()
    );
    if (passwordMatch) {
      AuthloginUser(req, res, user);
      return res.redirect("/");
    }
  }
};

router.get(
  "/signup",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const user = await db.User.build();

    res.render("signup", {
      title: "Sign Up",
      user,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/signup",
  csrfProtection,
  signupValidators,
  asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    const user = await db.User.build({
      userName,
      email,
      password,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      checkPassword(req, res, user, password);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render("signup", {
        title: "Sign Up",
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

router.get(
  "/login",
  csrfProtection,
  asyncHandler(async (req, res) => {
    res.render("login", {
      title: "Login",
      csrfToken: req.csrfToken(),
    });
  })
);

router.post(
  "/login",
  csrfProtection,
  loginValidators,
  asyncHandler(async (req, res) => {
    let errors = [];
    const { email, password } = req.body;
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await db.User.findOne({ where: { email } });
      validatePassword(req, res, user, password);
      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render("login", {
      title: "Login",
      email,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  console.log("user logged out");
  res.redirect("/");
});

module.exports = router;
