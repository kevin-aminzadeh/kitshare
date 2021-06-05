const router = require('express').Router();
const authRoutes = require('./authRoutes');
const listingRoutes = require('./listingRoutes');
const bookingRoutes = require('./bookingRoutes');

router.use('/auth', authRoutes);
router.use('/listings', listingRoutes);
router.use('/bookings', bookingRoutes);

module.exports = router;
