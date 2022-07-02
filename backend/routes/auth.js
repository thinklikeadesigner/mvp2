const router = require('express').Router();
const passport = require('passport');

const { FRONTEND_URL } = process.env;

// End express session and redirect user
// handled in parallel on the front end in App.js
// loggedIn is set to false
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(`${FRONTEND_URL}/welcome`);
});

// TODO write some middleware to get and store req params from /google/fields/:fields (It is possible to pass arrays of multiple callbacks)
router.get('/google/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: `${FRONTEND_URL}/welcome`,
  }),
  (req, res) => {
    res.redirect(`${FRONTEND_URL}/redirect`);
  }
);

router.get('/facebook', passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    // successRedirect: CLIENT_URL,
    failureRedirect: `${FRONTEND_URL}/welcome`,
  }),
  (req, res) => {
    res.redirect(`${FRONTEND_URL}/redirect`);
  }
);

router.get('/linkedin', passport.authenticate('linkedin'));

router.get(
  '/linkedin/callback',
  passport.authenticate('linkedin', {
    // successRedirect: CLIENT_URL,
    failureRedirect: `${FRONTEND_URL}/welcome`,
  }),
  (req, res) => {
    res.redirect(`${FRONTEND_URL}/redirect`);
  }
);

module.exports = router;

// TODO Configure other social logins. For now, google was sufficient for one PR

// const CLIENT_URL = 'http://localhost:5000/welcome';

// // this is replaced with FRONTEND_URL
// router.get('/login/failed', (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: 'No user found',
//   });
// });

// // this is replaced with api/investor
// router.get('/login/success', (req, res) => {
//   // handle this on the frontend
//   if (req.user) {
//     return res.status(200).json({
//       success: true,
//       message: 'success',
//       user: req.user,
//     });
//    }

//   return res.status(404).send({ message: 'user not found' });
// });
