const sequelize = require('../config/connection');
const seedLocation = require('./seedLocation');
const seedPriceInterval = require('./seedPriceInterval');
const seedStatus = require('./seedStatus');
const seedUserRole = require('./seedUserRole');
const seedUser = require('./seedUser');
const seedListing = require('./seedListing');

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

  process.exit(0);
};

seedAll();
