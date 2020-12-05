const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const { loginUser, logoutUser } = require("../auth.js");
const { db, csrfProtection, asyncHandler } = require("./utils.js");
const {
  validationResult,
  loginValidators,
  signupValidators,
} = require("./validators");

const savePassword = async (currentUser, userPassword) => {
  const hashedPassword = await bcrypt.hash(userPassword, 10);
  currentUser.password = hashedPassword;
  await currentUser.save();
};

const validatePassword = async (currentUser, currentPassword) => {
  if (currentUser) {
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      currentUser.password.toString()
    );
    return passwordMatch;
  }
};

router.get(
  "/signup",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const genres = await db.Genre.findAll();
    const user = await db.User.build();
    res.render("signup", {
      title: "Sign Up",
      user,
      csrfToken: req.csrfToken(),
      genres
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
      savePassword(user, password);
      loginUser(req, res, user);
      res.redirect("/");
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
    const genres = await db.Genre.findAll();
    res.render("login", {
      title: "Login",
      csrfToken: req.csrfToken(),
      genres
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
      const loggedin = validatePassword(user, password);
      if (loggedin) {
        loginUser(req, res, user);
        return res.redirect("/");
      }
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

router.post(
  "/demo",
  asyncHandler(async (req, res) => {
    const email = "demo@demo.com";
    const user = await db.User.findOne({ where: { email } });
    loginUser(req, res, user);
    res.redirect("/");
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

module.exports = router;
