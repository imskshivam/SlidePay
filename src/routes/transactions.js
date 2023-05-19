const express = require('express');
const router = express.Router();

// GET /transactions
router.get('/', (req, res) => {
  res.send('List of transactions');
});

// POST /transactions
router.post('/', (req, res) => {
  res.send('Create a new transaction');
});

// GET /transactions/:id
router.get('/:id', (req, res) => {
  const transactionId = req.params.id;
  res.send(`Transaction with ID ${transactionId}`);
});

// Export the router
module.exports = router;
