const { Booking } = require('../models');

const bookingData = [
  {
    time_from: new Date('2021-06-10'),
    time_to: new Date('2021-06-12'),
    price_total: 166.0,
    listing_id: '2a708c58-c15f-4f37-923b-a9158d968bfb',
    customer_id: '11293394-4170-4764-8260-f4722c88ca3c',
  },
  {
    time_from: new Date('2021-06-15'),
    time_to: new Date('2021-06-17'),
    price_total: 166.0,
    listing_id: '2a708c58-c15f-4f37-923b-a9158d968bfb',
    customer_id: '11293394-4170-4764-8260-f4722c88ca3c',
  },
  {
    time_from: new Date('2021-06-20'),
    time_to: new Date('2021-06-22'),
    price_total: 166.0,
    listing_id: '2a708c58-c15f-4f37-923b-a9158d968bfb',
    customer_id: '11293394-4170-4764-8260-f4722c88ca3c',
  },
];

const seedBooking = async () => {
  await Booking.bulkCreate(bookingData, {
    individualHooks: true,
  });
};

module.exports = seedBooking;
