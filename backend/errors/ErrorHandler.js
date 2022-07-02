// Keeping it simple here, we've got one custom error class to
// handle centralized errors. We could extend this out into
// multiple classes but  for now, keeping it simple like this
// will make consistency more attainable while still providing value
// -- Jake

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super(message); // extend standard message field
    this.statusCode = statusCode; // add custom field for status error
    this.stack = new Error().stack; // trace error back to source
  }
}

module.exports = ErrorHandler;
