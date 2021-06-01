const { Status } = require('../models');

const statusData = [
  {
    id: '12cb1060-0ab9-4f03-a8a7-3433283db218',
    name: 'pending',
  },
  {
    id: 'e327b7a6-7b0f-4520-98d0-b6502fc92414',
    name: 'accepted',
  },
  {
    id: 'a758a023-bbb5-469d-912b-7941f0691636',
    name: 'rejected',
  },
  {
    id: 'b0f6884d-3f8a-4063-ac15-f7cba63bfa92',
    name: 'cancelled',
  },
  {
    id: 'b55bfc9d-f8b8-47c9-b780-51f7582f665a',
    name: 'completed',
  },
  {
    id: '5865857c-c2e4-428a-9ae0-007a5159a502',
    name: 'disputed',
  },
];

const seedStatus = async () => {
  await Status.bulkCreate(statusData, {
    individualHooks: true,
  });
};

module.exports = seedStatus;
