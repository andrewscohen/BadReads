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

  res.render('signup', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  });
}));

const userValidators = [
  // TODO Define the user validators.c
  check('userName')
    .exists({checkFalsy: true})
    .withMessage('Please provide a value for User Name')
    .isLength({max: 250})
    .withMessage('User Name must not be more than 150 characters long'),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 250 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } }).then((user) => {
        if (user) {
          return Promise.reject('The provided Email Address is already in use by another account');
        }
      });
    }),

];

router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      userName,
      password,
    } = req.body;

    const user = db.User.build({
      email,
      userName,
      password
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await user.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('signup', {
        title: 'Sign Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));
// SignUp Routes End


module.exports = router;
