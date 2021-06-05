const router = require('express').Router();
const BookingController = require('../../controllers/BookingController');

// Create New Booking
router.post('/', BookingController.createBooking);

// Get All Bookings
router.get('/', BookingController.getAllBookings);

// Get Single Booking
router.get('/:id', BookingController.getBookingById);

// Update Booking
router.put('/', () => {
  console.log('Update Booking');
});

// Delete Comment
router.delete('/:id', () => {
  console.log('Delete Booking');
});

module.exports = router;
