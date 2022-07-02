// TODO split up bloated app.js files that can be modularized
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const { errors } = require('celebrate');
const path = require('path');
// const logger = require('morgan');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const fileUpload = require('express-fileupload');
const rootRouter = require('./routes/index');
const { requestLogger, errorLogger } = require('./middleware/logger');
const error = require('./middleware/error');

const ErrorHandler = require('./errors/ErrorHandler');
const { mockMiddleware } = require('./middleware/mock');

require('./passport');

dotenv.config();

// app.use(logger('dev'));

// Required environment variables for development and production
const { DOTCOT_SECRET, MONGODB_URI, FRONTEND_URL } = process.env;

const app = express();

// middleware
app.use(fileUpload());
app.use(express.json());
app.use(
  cors({
    origin: [FRONTEND_URL],
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true,
  })
);

// use mock data for testing
if (process.env.NODE_ENV === 'test') {
  app.use(mockMiddleware);
}

// store users session on the server
app.use(
  session({
    secret: DOTCOT_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: MONGODB_URI,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// TODO: Serialize only ID. Serializing the whole user isn't ideal
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// log requests to console
// app.use(logger('dev'));

app.use(errors());

// log requests
app.use(requestLogger);

// Api routes
app.use(rootRouter);

// test error logger (temporary)
app.get('/crash-test', () => {
  // example error handler with bogus status code
  throw new ErrorHandler(404, 'Server will crash now');
});

// send frontend build
app.use('/', express.static(path.join(__dirname, '../', 'frontend', 'build')));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
});

// log errors
app.use(errorLogger);

// middleware
app.use(error);

module.exports = app;
