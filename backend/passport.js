require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy;
const passport = require('passport');
const { createOrUpdateInvestor } = require('./controllers/investors');

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;
// const { FACEBOOK_TEST_APP_ID, FACEBOOK_TEST_APP_SECRET } = process.env;
const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      createOrUpdateInvestor(profile, done);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      profileFields: ['id', 'emails', 'name'], // This
      callbackURL: '/api/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      createOrUpdateInvestor(profile, done);
    }
  )
);

passport.use(
  new LinkedinStrategy(
    {
      clientID: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
      callbackURL: '/api/auth/linkedin/callback',
      profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline'],
      scope: ['r_emailaddress', 'r_liteprofile'],
      state: true,
    },
    (accessToken, refreshToken, profile, done) => {
      createOrUpdateInvestor(profile, done);
    }
  )
);
