const { PriceInterval } = require('../models');

const priceIntervalData = [
  {
    id: 'c62ce27a-d313-44c7-95f9-728f3c6dab5b',
    name: 'day',
  },
];

const seedPriceInterval = async () => {
  await PriceInterval.bulkCreate(priceIntervalData, {
    individualHooks: true,
  });
};

module.exports = seedPriceInterval;
