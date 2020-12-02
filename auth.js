const db = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const logoutUser = (req, res, user) => {
  delete req.session.auth;
};

module.exports = {
  loginUser,
  logoutUser,
};
