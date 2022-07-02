// const { FRONTEND_URL } = process.env;
const ErrorHandler = require('../errors/ErrorHandler');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return next(new ErrorHandler(403, "Can't do that!"));
}

module.exports = { ensureAuthenticated };
