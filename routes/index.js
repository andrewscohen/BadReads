var express = require('express');
const csrf = require('csrf');
var router = express.Router();

const csrfProtection = csrf({ cookie: true })
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

module.exports = { router, csrfProtection, asyncHandler }
