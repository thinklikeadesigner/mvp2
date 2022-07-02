// Directions on use:
// ---
// Where errors are handled (controllers) user the following Syntax"
// ---
// in .then()
// throw new ErrorHandler(###, 'message')
// ---
// in .catch()
// return next(new ErrorHandler(###, 'message')) (if error is predicted)
// or ---
// return next(err) (if error is unpredicted)
// ---
// As of 11.20.21 see app.js /GET /crash-test for an example

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message, stack } = err;
  res.status(statusCode).send({
    message: statusCode === 500 ? 'An error occurred on the server' : message,
    stack: stack.split('   '), // display as an array with each step as one line
  });
};
