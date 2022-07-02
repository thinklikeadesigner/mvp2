const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Startup = require('../models/startup');
const { MOCK_FOUNDER_EMAIL, MOCK_STARTUP, MOCK_USER_ID } = require('./utils');

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);

describe('Startup Routes', () => {
  // initialize temporary startup in high level scope
  let tempStartup;

  // Runs before the tests below -- Create mock startup -- populate tempStartup
  before(() =>
    Startup.create(MOCK_STARTUP)
      .then((response) => {
        tempStartup = response;
      })
      .catch((error) => {
        console.log(error);
      })
  );

  // Runs after the tests below -- Delete mock startup
  after((done) => {
    Startup.findOneAndDelete({ founderEmail: MOCK_FOUNDER_EMAIL })
      .then((startups) => {
        done();
      })
      .catch((error) => {
        console.error(error);
        done(error);
      });
  });

  // GET /api/startups --
  it('GET: Return startups belonging to investor', (done) => {
    request(app)
      .get('/api/startups/')
      .expect(200)
      .then((res) => {
        const returnsAStartup = res.body.count > 0; // since a startup was created above, at least should be returned
        const isOwnedByUser = res.body.startups[0].investorId === MOCK_USER_ID; // verify that first returned startup belongs to current user
        if (returnsAStartup && isOwnedByUser) {
          return done();
        }
        return done(new Error('Something went wrong'));
      })
      .catch((err) => {
        done(err);
      });
  });

  // GET /api/startups
  it('GET: Throw error if request returns no startups', () =>
    request(app).get(`/api/startups?revenueMin=${1}&revenueMax=${-1}`).expect(418)); // this request should never return any startups
});
