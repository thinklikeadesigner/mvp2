const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Startup = require('../models/startup');
const { MOCK_FOUNDER_EMAIL, MOCK_STARTUP, MOCK_USER_ID } = require('./utils');

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);

describe('Empty Database', () => {

  // GET /api/startups
  it('GET: Throw error if no startups exist in database', () =>
    request(app).get(`/api/startups?`).expect(404));
    // this request should never return any startups
});
