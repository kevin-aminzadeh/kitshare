const sequelize = require('../config/connection');
const seedBooking = require('./bookingData');
const seedListing = require('./listingData');
const seedLocation = require('./locationData');
const seedPaymentMethod = require('./paymentMethodData');
const seedPriceInterval = require('./priceIntervalData');
const seedStatus = require('./statusData');
const seedUser = require('./userData');
const seedUserRole = require('./userRoleData');

const seedAll = async () => {
  await sequelize.sync({ force: false });

  // Seed Tables With No Foreign Keys
  await seedLocation();
  await seedPaymentMethod();
  await seedPriceInterval();
  await seedStatus();
  await seedUserRole();

  // Seed Interdependent Tables In Correct Order
  await seedUser();
  await seedListing();
  await seedBooking();

  process.exit(0);
};

seedAll();
