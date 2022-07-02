const request = require('supertest');
const app = require('../app.js');

// GET api/crash-test
describe('Crash Test', () => {
  it('it should return a server error and log it to error.log', () =>
    request(app)
      .get('/crash-test')
      .expect(404)
      .expect('Content-Type', 'application/json; charset=utf-8'));
});
