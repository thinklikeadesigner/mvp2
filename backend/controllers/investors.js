const { nanoid } = require('nanoid');
const Investor = require('../models/investor');
const ErrorHandler = require('../errors/ErrorHandler');

let characterCount = 6; // could be any number

function createUniqueUrl() {
  // create new formUrl with 8 characters
  const newUrl = nanoid(characterCount);
  // check if user with url already exists
  return Investor.findOne({ formUrl: newUrl })
    .then((investor) => {
      if (!investor) {
        // if one doesn't, return the formUrl
        return newUrl;
      }
      // if one does exist, create a new url and check again,
      characterCount += 1;
      return createUniqueUrl();
    })
    .catch((error) => {
      console.error(error);
    });
}

async function createOrUpdateInvestor(profile, done) {
  const newUrl = await createUniqueUrl();
  // Find existing or create new user
  Investor.findOne({ email: profile.emails[0].value })
    .then((investor) => {
      // handle if no investor with that email exists
      if (!investor) {
        return (
          Investor.create({
            name: profile.name.givenName,
            surname: profile.name.familyName,
            provider: profile.provider,
            email: profile.emails[0].value,
            formUrl: newUrl,
          })
            .then((newInvestor) => done(null, newInvestor))
            // catch redirects to api/auth/login/failed with 401
            .catch(() => done(null, false))
        );
      }
      // handle if investor with an existing account has updated their name on their social (rare)
      if (
        investor.name !== profile.name.givenName ||
        investor.surname !== profile.name.familyName
      ) {
        return (
          Investor.findOneAndUpdate(
            // find by found investor's email
            { email: profile.emails[0].value },
            // update with new name and surname
            { name: profile.name.givenName, surname: profile.name.familyName },
            // validate then return the updated investor profile
            {
              new: true, // return updated user
              runValidators: true, // validate inputs before update
            }
          )
            .then((updatedInvestor) => done(null, updatedInvestor))
            // catch redirects to api/auth/login/failed with 401
            .catch(() => done(null, false))
        );
      }
      return done(null, investor);
    })
    // catch redirects to api/auth/login/failed with 401
    .catch(() => done(null, false));
}

function updateInvestor(req, res, next) {
  const { id } = req.params;
  const formFields = req.body;

  Investor.findByIdAndUpdate(
    id,
    { formFields },
    {
      new: true, // return updated user
      runValidators: true, // validate inputs before update
    }
  )
    .then((investor) => {
      if (!investor) {
        throw new ErrorHandler(404, 'User not found');
      }
      // update stored investor
      if (process.env.NODE_ENV !== 'test') {
        req.session.passport.user = investor;
      }
      // send updated user information
      res.send({ data: investor });
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return next(new ErrorHandler(400, 'Invalid userId'));
      }
      console.error(error);
      return next(error);
    });
}

function getForm(req, res, next) {
  if (!(req.params.formUrl.length >= characterCount)) {
    return next(new ErrorHandler(422, 'Request invalid (formUrl is missing)'));
  }
  const { formUrl } = req.params;
  // this will go in /backend/controllers
  return Investor.findOne({ formUrl })
    .then((investor) => {
      if (!investor) {
        throw new ErrorHandler(404, 'User not found');
      }
      res.send({
        data: {
          investorId: investor.id,
          name: investor.name,
          surname: investor.surname,
          formFields: investor.formFields,
        },
      });
    })
    .catch((error) => next(error));
}

function deleteInvestor(req, res, next) {
  Investor.findByIdAndDelete(req.params.id)
    .then((investor) => {
      res.send({
        message: `Successfully deleted ${investor.name}'s profile.'`,
      });
    })
    .catch((error) => {
      if (error.name === 'CastError') {
        return next(new ErrorHandler(400, 'Invalid Investor Id'));
      }
      if (error.name === 'DocumentNotFoundError') {
        return next(new ErrorHandler(404, 'Investor not found'));
      }
      return next(error);
    });
}

module.exports = { createOrUpdateInvestor, updateInvestor, getForm, deleteInvestor };
