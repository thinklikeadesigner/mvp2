const Startup = require('../models/startup');
const Investor = require('../models/investor');
const ErrorHandler = require('../errors/ErrorHandler');
const { uploadFile } = require('../helpers/uploadfiles');

// NEW FUNCTION
function countStartups(req, res, next) {
  Startup.find({ investorId: req.user._id })
    .then((stuff) => {
      if (!(stuff.length > 0)) {
        throw new ErrorHandler(404, 'No startups have been submitted yet ');
      } else {
        next();
      }
    })
    .catch((err) => next(err));
}

function getStartups(req, res, next) {
  const { segment, location } = req.query;

  const skip = req.query.skip ? parseInt(req.query.skip, 10) : 0;

  let revenueMin = req.query.revenueMin ? req.query.revenueMin : false;

  let revenueMax = req.query.revenueMax ? req.query.revenueMax : false;

  let growthMin = req.query.growthMin ? req.query.growthMin : false;

  let growthMax = req.query.growthMax ? req.query.growthMax : false;

  if (revenueMax && !revenueMin) {
    revenueMin = 10;
  }

  if (revenueMin && !revenueMax) {
    revenueMax = 200;
  }

  if (growthMax && !growthMin) {
    growthMin = 0;
  }

  if (growthMin && !growthMax) {
    growthMax = 0;
  }

  Startup.countDocuments({
    investorId: req.user._id,
    ...(revenueMin || revenueMax ? { revenue: { $gte: revenueMin, $lte: revenueMax } } : null),
    ...(segment ? { segment } : null),
    ...(location ? { location } : null),
    ...(growthMin || growthMax ? { growth: { $gte: growthMin, $lte: growthMax } } : null),
  })
    .then((arrayLength) => {
      Startup.find({
        investorId: req.user._id,
        ...(revenueMin || revenueMax ? { revenue: { $gte: revenueMin, $lte: revenueMax } } : null),
        ...(segment ? { segment } : null),
        ...(location ? { location } : null),
        ...(growthMin || growthMax ? { growth: { $gte: growthMin, $lte: growthMax } } : null),
      })
        .sort({
          createdAt: -1,
          _id: 1,
        })
        .skip(skip)
        .limit(50)
        .then((startups) => {
          if (!(startups.length > 0)) {
            throw new ErrorHandler(418, 'No startups match the filter parameters');
          }
          const count = String(arrayLength);
          res.status(200).send({ count, startups });
        })
        .catch((err) => {
          // a CastError wouldn't occur here, but here is an
          // example of using 'return next(...' in a catch statement
          // if (err.name === 'CastError') {
          //   return next(new ErrorHandler(400, 'Invalid userId'));
          // }
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
}

function saveStartup(req, res, next) {
  // Require investorId
  if (!req.body.investorId) {
    return next(new ErrorHandler(422, 'Request invalid (investorId is missed)'));
  }
  // Require files
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler(400, 'No files were uploaded.'));
  }

  // Require Investors formFields
  return Investor.findById(req.body.investorId)
    .then((investor) => {
      // Create a sorted array of required fields
      const requiredFormFields = investor.formFields.sort();

      // Iterate over that array and check that each required value is included
      requiredFormFields.forEach((field) => {
        if (!Object.prototype.hasOwnProperty.call(req.body, field)) {
          // If the body doesn't have a required field... error
          throw new ErrorHandler(
            422,
            `Invalid request: Required fields are either not present or a provided field is not needed.`
          );
        }
      });
      // If all above checks pass...
      // == Create Startup ==
      return Startup.create(req.body)
        .then((startup) => {
          // HERE: startup created without logo or presentationDeck
          // == Upload files ==
          const uploads = [
            // upload logo to AWS
            uploadFile(req.files.logo, startup._id), // express-fileupload enables req.files
            // upload presentationDeck to AWS
            uploadFile(req.files.presentationDeck, startup._id),
          ];
          Promise.all(uploads)
            .then((data) => {
              // == Add uploaded files ==
              Startup.findByIdAndUpdate(
                startup._id, // id of startup to update
                {
                  // append logo to startup
                  logo: data[0].Location,
                  // append presentationDeck to startup
                  presentationDeck: data[1].Location,
                },
                {
                  new: true,
                  runValidators: true,
                }
              )
                // == Return updated Startup ==
                .then((updatedStartup) => {
                  if (!updatedStartup) {
                    throw new ErrorHandler(404, 'Startup not found');
                  }
                  return res.send({ data: updatedStartup });
                })
                .catch((err) => {
                  if (err.name === 'CastError') {
                    return next(new ErrorHandler(400, 'Invalid startupId'));
                  }
                  return next(err);
                });
            })
            .catch((error) => next(error));
        })
        .catch((error) => {
          if (error.name === 'ValidationError') {
            return next(new ErrorHandler(400, 'Invalid inputs'));
          }
          return next(error);
        });
    })
    .catch((error) => next(error));
}

module.exports = { getStartups, saveStartup, countStartups };
