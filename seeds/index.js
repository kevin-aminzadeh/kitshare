const sequelize = require('../config/connection');
const seedBooking = require('./seedBooking');
const seedListing = require('./seedListing');
const seedLocation = require('./seedLocation');
const seedPaymentMethod = require('./seedPaymentMethod');
const seedPriceInterval = require('./seedPriceInterval');
const seedStatus = require('./seedStatus');
const seedUser = require('./seedUser');
const seedUserRole = require('./seedUserRole');

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
