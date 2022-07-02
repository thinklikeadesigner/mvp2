const Mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

// function validateEmail(string) {
//   if (!validator.isEmail(string)) {
//     throw new Error("Submitted email is not valid")
//   }
//   return string
// }

const investorSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: isEmail,
    },
  },
  formFields: {
    type: Array,
    default: [],
  },
  formUrl: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Mongoose.model('investor', investorSchema);
