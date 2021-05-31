const router = require('express').Router();
const listingRoutes = require('./listingRoutes');

router.use('listings', listingRoutes);

module.exports = router;
