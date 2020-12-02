var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const { loginUser, logoutUser} = require('../auth')
const {csrfProtection, asyncHandler} = require('./index')
/* GET users listing. */
router.get('/', function(req, res, next) {
  //query books
  res.render('home');
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
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      userName,
      email,
      password,
    } = req.body;

    const user = db.User.build({
      userName,
      email,
      password
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();
      loginUser(req,res, user)
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
