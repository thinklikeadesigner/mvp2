const { MOCK_USER } = require('../test/utils');

// middleware used to bypass authentication in testing
const mockMiddleware = (req, res, next) => {
  // passport would usually create req.user, instead we set it here
  req.user = MOCK_USER;
  // bypass authentication middleware setting isAuthenticated to true
  req.isAuthenticated = () => true;
  next();
};

module.exports = { mockMiddleware };
