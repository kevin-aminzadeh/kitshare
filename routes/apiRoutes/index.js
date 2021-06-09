const router = require('express').Router();
const authRoutes = require('./authRoutes');
const listingRoutes = require('./listingRoutes');
const bookingRoutes = require('./bookingRoutes');
const billingRoutes = require('./billingRoutes');

router.use('/auth', authRoutes);
router.use('/listings', listingRoutes);
router.use('/bookings', bookingRoutes);
router.use('/billing', billingRoutes);

module.exports = router;
