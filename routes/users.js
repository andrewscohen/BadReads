const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const { csrfProtection, asyncHandler } = require("./index");

const {
  db,
  validationResult,
  loginValidators,
  signupValidators,
} = require("./validators");

const { AuthloginUser, logoutUser } = require("../auth");

router.get("/", function (req, res, next) {
  //query books
  res.render("home");
});

router.get(
  "/signup",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const user = db.User.build();

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

    const user = db.User.build({
      userName,
      email,
      password,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();
      AuthloginUser(req, res, user);
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
      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render("login", {
      title: "Login",
      emailAddress,
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.post("/logout", (req, res) => {
  logoutUser(req, res);
  res.redirect("/");
});

module.exports = router;
