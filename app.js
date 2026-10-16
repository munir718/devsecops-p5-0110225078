const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.use(express.json());

// Main Route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to DevSecOps Pipeline Assignment API',
    timestamp: new Date().toISOString()
  });
});

// Use API Routes
app.use('/api', apiRoutes);

module.exports = app;