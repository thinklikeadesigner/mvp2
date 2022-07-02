const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Investor = require('../models/investor');
const Startup = require('../models/startup');
const {
  MOCK_INVESTOR_EMAIL,
  MOCK_FOUNDER_EMAIL,
  NEW_FOUNDER_EMAIL,
  MOCK_INVESTOR,
  MOCK_STARTUP,
  NEW_STARTUP,
  LACKING_STARTUP,
  LOGO_FILE,
  PRESENTATION_DECK_FILE,
} = require('./utils.js');

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI);

describe('Form Routes', () => {
  // initialize temporary investor in high level scope
  let tempInvestor;
  // initialize temporary startup in high level scope
  let tempStartup;

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

  // Runs after the tests below -- Delete new startup
  after((done) => {
    Startup.findOneAndDelete({ founderEmail: NEW_FOUNDER_EMAIL })
      .then((startups) => {
        done();
      })
      .catch((error) => {
        console.error(error);
        done(error);
      });
  });

  // GET /api/forms/:formUrl
  it('GET: Return error if no investor id is invalid', () =>
    request(app).get('/api/forms/12345').expect(422));

  // GET /api/forms/:formUrl
  it('GET: Return investor form fields', () =>
    request(app)
      .get(`/api/forms/${tempInvestor.formUrl}`)
      .expect(200, {
        data: {
          investorId: `${tempInvestor._id}`,
          name: 'John',
          surname: 'Doe',
          formFields: ['revenue', 'growth', 'location', 'segment'],
        },
      }));

  // NOTE: We do not test a successful POST (s3 testing is a pain)

  // POST /api/forms with invalid inputs
  it('POST: Return error if inputs are invalid types', () =>
    request(app)
      .post('/api/forms')
      // name is invalid type
      .field('name', 10)
      // import files to ensure that they are not the cause or error
      .attach('logo', LOGO_FILE)
      .attach('presentationDeck', PRESENTATION_DECK_FILE)
      .field('investorId', `${tempInvestor._id}`)
      .field(NEW_STARTUP)
      .expect(400));

  // POST /api/forms with lacking inputs
  it('POST: Return error if required formFields are not present', () =>
    request(app)
      .post('/api/forms')
      // import files to ensure that they are not the cause or error
      .attach('logo', LOGO_FILE)
      .attach('presentationDeck', PRESENTATION_DECK_FILE)
      .field('investorId', `${tempInvestor._id}`)
      .field(LACKING_STARTUP)
      .expect(422));

  // POST /api/forms without files
  it('POST: Return error if files are not present', () =>
    request(app)
      .post('/api/forms')
      .field('investorId', `${tempInvestor._id}`)
      .field(NEW_STARTUP)
      .expect(400));

  // POST /api/forms
  it('POST: Return error if form is attempted without investorId', () =>
    request(app).post('/api/forms').expect(422));
});
