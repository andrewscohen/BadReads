var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//SignUp Routes

router.get('/signup-form', csrfProtection, asyncHandler(async (req, res) => {
  const user = db.User.build();

  res.render('user-register', {
    title: 'Register',
    userName,
    csrfToken: req.csrfToken(),
  });
}));

const userValidators = [
  // TODO Define the user validators.c

];

router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      userName,
      password,
    } = req.body;

    const user = db.User.build({
      emailAddress,
      userName,
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

// SignUp Routes


module.exports = router;
