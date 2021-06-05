const BookingService = require('../services/BookingService');
const ListingService = require('../services/ListingService');

// Create New Booking
exports.createBooking = async (req, res) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error('You must be logged in to create a new Booking.');
    }

    // If Request Data is Invalid, Reject Request
    if (
      !req.body.time_from ||
      !req.body.to_to ||
      !req.body.interval_count ||
      !req.body.listing_id
    ) {
      throw Error('Invalid Request Data.');
    }

    // Create Booking Object
    const Booking = { ...req.body };

    // Create Booking in DB
    await BookingService.createBooking(Booking);
    res.status(200).json('Booking Created Successfully.');
  } catch (err) {
    res.status(400).json(err.toString());
  }
};

// Get All Bookings
exports.getAllBookings = async (req, res) => {
  try {
    const BookingsData = await BookingService.getAll();
    res.status(200).json(BookingsData);
  } catch (err) {
    res.status(400).json(err.toString());
  }
};

// Get Single Booking
exports.getBookingById = async (req, res) => {
  try {
    const BookingData = await BookingService.getById(req.params.id);
    console.log(BookingData);
    res.status(200).json(BookingData);
  } catch (err) {
    res.status(400).json(err.toString());
  }
};

// Edit Booking
exports.updateBooking = async (req, res) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error('You Must Be Logged In To Booking.');
    }

    // If Request Data is Invalid, Reject Request
    if (!req.body) {
      throw Error('Invalid Request Data.');
    }

    // Construct Booking Object
    const Booking = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      price_interval_id: req.body.priceIntervalId,
      location_id: req.body.locationId,
      owner_id: req.session.userId,
    };

    // Update Booking
    await BookingService.updateBooking(Booking);

    res.status(200).json('Booking Successfully Updated');
  } catch (err) {
    res.status(400).json(err.toString());
  }
};

// Delete Booking
exports.deleteBooking = async (req, res) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error('You Are Not Authorized To Perform This Action.');
    }

    // If Request Data is Invalid, Reject Request
    if (!req.params.id || !req.session.userId) {
      throw Error('Invalid Request Data.');
    }

    // Request Booking Deletion from Booking Service
    await BookingService.deleteBooking(req.params.id, req.session.userId);

    res.status(200).json('Booking Successfully Deleted');
  } catch (err) {
    res.status(400).json(err.toString());
  }
};
