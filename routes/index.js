const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./apiRoutes');

// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the React App
if (process.env.NODE_ENV === 'production') {
  router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'path/to/your/index.html'), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
}
module.exports = router;
