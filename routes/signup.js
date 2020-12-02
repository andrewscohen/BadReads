const express = require('express');

const router = express.Router();

const { check, validationResult } = require('express-validator');
const db = require('../db/models');



router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const user = db.User.build();

  res.render('user-register', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken(),
  });
}));

const userValidators = [
  // TODO Define the user validators.c

];

router.post('/user', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      name,
      password,
    } = req.body;

    const user = db.User.build({
      emailAddress,
      name,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await user.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-register', {
        title: 'Register',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

module.exports = router;
