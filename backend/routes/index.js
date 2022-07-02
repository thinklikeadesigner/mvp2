const express = require('express');
const { ensureAuthenticated } = require('../middleware/auth');

const rootRouter = express.Router();

const authRoute = require('./auth');
const investorRouter = require('./investors');
const startupsRouter = require('./startups');
const formsRouter = require('./forms');

// Authorization with passport
rootRouter.use('/api/auth', authRoute);

// Routes accessible to startups
rootRouter.use('/api/forms', formsRouter);

// Routes protected with middleware
rootRouter.use('/api/investors', ensureAuthenticated, investorRouter);
rootRouter.use('/api/startups', ensureAuthenticated, startupsRouter);

module.exports = rootRouter;
