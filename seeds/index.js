const sequelize = require('../config/connection');
const seedLocation = require('./seedLocation');
const seedPriceInterval = require('./seedPriceInterval');
const seedStatus = require('./seedStatus');
const seedUserRole = require('./seedUserRole');
const seedUser = require('./seedUser');
const seedListing = require('./seedListing');
const seedBooking = require('./seedBooking');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // Seed Tables With No Foreign Keys
  await seedLocation();
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
