const csrf = require("csurf");
const bcrypt = require("bcryptjs");

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

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

module.exports = {
  csrfProtection,
  asyncHandler,
  savePassword,
  validatePassword,
};
