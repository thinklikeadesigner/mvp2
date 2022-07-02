const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');
const Investor = require('../models/investor');
const { MOCK_INVESTOR_EMAIL, MOCK_INVESTOR, VALIDATED_USER } = require('./utils');

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);

describe('Investor Routes', () => {
  // initialize temporary investor in high level scope
  let tempInvestor;
  // Runs before the tests below -- Create mock investor -- populate tempInvestor
  before((done) => {
    Investor.findOne({ email: MOCK_INVESTOR_EMAIL })
      .then((investor) => {
        if (!investor) {
          Investor.create(MOCK_INVESTOR).then((newInvestor) => {
            tempInvestor = newInvestor;
            return done();
          });
        } else {
          tempInvestor = investor;
          return done();
        }
      })
      .catch((error) => done(error));
  });

  // Runs after the tests below -- Delete mock investor
  after((done) => {
    Investor.findOneAndDelete({ email: MOCK_INVESTOR_EMAIL })
      .then((investor) => {
        done();
      })
      .catch((error) => {
        console.error(error);
        done(error);
      });
  });

  // GET /investors
  it('GET: Validates current user', (done) => {
    request(app).get('/api/investors').expect(200, VALIDATED_USER, done);
  });

  // PATCH /investors/:id
  it('PATCH: Updates current users field forms', (done) => {
    request(app)
      .patch(`/api/investors/${tempInvestor._id.toString()}`)
      .send(['region'])
      .expect(
        200,
        {
          data: {
            _id: `${tempInvestor._id}`,
            name: 'John',
            surname: 'Doe',
            provider: 'google',
            email: 'johndoe@test.com',
            formFields: ['region'],
            formUrl: 'qDTsnnga',
            __v: 0,
          },
        },
        done
      );
  });

  // PATCH /investors/:id
  it('PATCH: Returns error if id is invalid', (done) => {
    request(app).patch('/api/investors/invalidid').expect(400, done);
  });

  // DELETE /investors/:id
  it('DELETE: Returns message regarding successful deletion', (done) => {
    request(app)
      .delete(`/api/investors/${tempInvestor.id}`)
      .expect(
        200,
        {
          message: `Successfully deleted ${tempInvestor.name}'s profile.'`,
        },
        done
      );
  });

  // DELETE /investors/:id
  it('DELETE: Returns error if id is invalid', (done) => {
    request(app).delete('/api/investors/invalidid').expect(400, done);
  });
});
