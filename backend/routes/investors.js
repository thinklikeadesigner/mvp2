const express = require('express');
const { updateInvestor, deleteInvestor } = require('../controllers/investors');

const router = express.Router();

// Verify the user from App
router.get('/', (req, res, next) => {
  res.send({ user: req.user });
});

router.delete('/:id', deleteInvestor);

router.patch('/:id', updateInvestor);

module.exports = router;
