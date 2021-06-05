const router = require('express').Router();
const authRoutes = require('./authRoutes');
const listingRoutes = require('./listingRoutes');

router.use('/auth', authRoutes);
router.use('/listings', listingRoutes);

module.exports = router;
