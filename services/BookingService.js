const { Booking, User, Location, PriceInterval } = require('../models/index');

// Create New Booking in DB
exports.createBooking = async (bookingData) => {
  try {
    const dbData = await Booking.create(bookingData);
    return dbData;
  } catch (err) {
    throw Error(err);
  }
};

// Get All Bookings
exports.getAll = async () => {
  try {
    const dbData = await Booking.findAll();

    // Extract Plain Data
    const bookings = dbData.map((booking) => booking.get({ plain: true }));

    return bookings;
  } catch (err) {
    throw Error(err);
  }
};

// Get Booking Record by ID
exports.getById = async (id) => {
  try {
    const dbData = await Booking.findByPk(id, {
      attributes: ['id', 'time_from', 'time_to', 'price_total'],
      include: [
        {
          model: User,
          as: 'customer',
          attributes: ['first_name', 'last_name'],
        },
        {
          model: PriceInterval,
          attributes: ['name'],
        },
        {
          model: Location,
          attributes: ['name'],
        },
      ],
    });

    const plainData = dbData.get({ plain: true });

    const BookingData = {
      ...plainData,
      customer: {
        firstName: plainData.customer.first_name,
        lastName: plainData.customer.last_name,
      },
      priceInterval: plainData.priceInterval.name,
      location: plainData.location.name,
    };
    return BookingData;
  } catch (err) {
    throw Error(err);
  }
};

// Update Booking Record
exports.updateBooking = async (BookingData) => {
  try {
    const res = await Booking.update(
      { content: BookingData.content },
      {
        where: {
          id: BookingData.id,
          customer_id: BookingData.owner_id,
        },
      }
    );
    return res;
  } catch (err) {
    throw Error(err);
  }
};

// Delete Booking Record
exports.deleteBooking = async (BookingId, userId) => {
  try {
    const res = await Booking.destroy({
      // Ensure userID === Booking owner's ID
      where: {
        id: BookingId,
        customer_id: userId,
      },
    });
    return res;
  } catch (err) {
    throw Error(err);
  }
};
