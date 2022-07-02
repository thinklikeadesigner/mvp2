const router = require('express').Router();
const { getStartups, countStartups } = require('../controllers/startups');

router.get('/', countStartups, getStartups);

module.exports = router;
