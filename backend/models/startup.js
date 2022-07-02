const mongoose = require('mongoose');
const validator = require('validator');

const startupSchema = new mongoose.Schema({
  investorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    minlength: 2,
    maxlength: 30,
    default: '',
  },
  createdAt: {
    type: Date,
    default: () => Date.now(), // populates field with date of creation
  },
  logo: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 350,
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'Invalid link',
    },
  },
  pitchUrl: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isURL(v);
      },
      message: 'Invalid link',
    },
  },
  presentationDeck: {
    type: String,
  },
  founder: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  founderEmail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return validator.isEmail(v);
      },
      message: 'Invalid email',
    },
  },
  founderFacebook: {
    type: String,
    validate: {
      validator(v) {
        if (v.length === 0) {
          return true;
        }
        return validator.isURL(v);
      },
      message: 'Invalid link',
    },
  },
  founderLinkedIn: {
    type: String,
    validate: {
      validator(v) {
        if (v.length === 0) {
          return true;
        }
        return validator.isURL(v);
      },
      message: 'Invalid link',
    },
  },
  isRevenue: {
    type: Boolean,
  },
  revenue: {
    type: Number,
    min: 10,
    max: 200,
    required() {
      return this.isRevenue === true;
    },
  },
  isSegment: {
    type: Boolean,
  },
  segment: {
    type: String,
    required() {
      return this.isSegment === true;
    },
  },
  isLocation: {
    type: Boolean,
  },
  location: {
    type: String,
    required() {
      return this.isLocation === true;
    },
  },
  isGrowth: {
    type: Boolean,
  },
  growth: {
    type: Number,
    min: 0,
    required() {
      return this.isGrowth === true;
    },
  },
  acceptedTerms: {
    type: Boolean,
  },
  recaptcha: {
    type: String,
  },
});

module.exports = mongoose.model('startup', startupSchema);
