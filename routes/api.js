const express = require('express');
const router = express.Router();
const { formatData } = require('../utils/helper');

// Sample data endpoint
router.get('/data', (req, res) => {
  const sampleItems = ['Item Alpha', 'Item Beta', 'Item Gamma'];
  const formatted = formatData(sampleItems);
  
  res.status(200).json({
    status: 'success',
    count: formatted.length,
    data: formatted
  });
});

// Echo POST endpoint
router.post('/echo', (req, res) => {
  const { input } = req.body;
  if (!input) {
    return res.status(400).json({ status: 'error', message: 'Input is required' });
  }
  
  res.status(201).json({
    status: 'success',
    received: input
  });
});

module.exports = router;