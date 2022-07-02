const express = require('express');
const { getForm } = require('../controllers/investors');
const { saveStartup } = require('../controllers/startups');

const router = express.Router();

router.get('/:formUrl', getForm);

router.post('/', saveStartup);

module.exports = router;
