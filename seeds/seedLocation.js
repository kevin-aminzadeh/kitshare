const { Location } = require('../models');

const locationData = [
  {
    id: '1836ae47-2e1b-406b-abf6-aab048913255',
    name: 'seacombe heights',
    postal_code: 5047,
    lat: -35.02905,
    long: 138.54935,
  },
  {
    id: 'aed28563-60a7-4be1-8990-888192a30cc7',
    name: 'Adelaide CBD',
    postal_code: 5000,
    lat: -34.928497,
    long: 138.600739,
  },
  {
    id: '38eb17e3-6f19-4bf3-81ca-739e0bfb22ff',
    name: 'magill',
    postal_code: 5072,
    lat: -34.912628,
    long: 138.675873,
  },
  {
    id: '7d7a6de4-a614-4bcf-89cb-2fe0f0080fab',
    name: 'norwood',
    postal_code: 5067,
    lat: -34.927292,
    long: 138.627899,
  },
];

const seedLocation = async () => {
  await Location.bulkCreate(locationData, {
    individualHooks: true,
  });
};

module.exports = seedLocation;
