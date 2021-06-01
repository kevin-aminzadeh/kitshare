const { Listing } = require('../models');

const listingData = [
  {
    id: '169e1fe1-c08d-4b85-8aa2-a917edb77856',
    title: 'Canon 5D Mark IV',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, nulla neque deserunt sapiente repellat nobis, explicabo vero a maxime, nesciunt commodi voluptatem minima vel perspiciatis? Cupiditate ab quasi quas itaque.',
    price: 130,
    price_interval_id: 'c62ce27a-d313-44c7-95f9-728f3c6dab5b',
    owner_id: '11293394-4170-4764-8260-f4722c88ca3c',
    location_id: '38eb17e3-6f19-4bf3-81ca-739e0bfb22ff',
  },
  {
    id: '2532b501-c796-4683-9529-4192eb937ebf',
    title: 'Sony A7SIII',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, nulla neque deserunt sapiente repellat nobis, explicabo vero a maxime, nesciunt commodi voluptatem minima vel perspiciatis? Cupiditate ab quasi quas itaque.',
    price: 120,
    price_interval_id: 'c62ce27a-d313-44c7-95f9-728f3c6dab5b',
    owner_id: '11293394-4170-4764-8260-f4722c88ca3c',
    location_id: 'aed28563-60a7-4be1-8990-888192a30cc7',
  },
  {
    id: '2a708c58-c15f-4f37-923b-a9158d968bfb',
    title: 'Sigma 24-70mm f/2.8 DG DN Art E-Mount Lens',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, nulla neque deserunt sapiente repellat nobis, explicabo vero a maxime, nesciunt commodi voluptatem minima vel perspiciatis? Cupiditate ab quasi quas itaque.',
    price: 83,
    price_interval_id: 'c62ce27a-d313-44c7-95f9-728f3c6dab5b',
    owner_id: 'c6e70b9c-da7f-4726-bb71-e1848c18a9ba',
    location_id: 'aed28563-60a7-4be1-8990-888192a30cc7',
  },
];

const seedListing = async () => {
  await Listing.bulkCreate(listingData, {
    individualHooks: true,
  });
};

module.exports = seedListing;
