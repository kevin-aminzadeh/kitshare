const { UserRole } = require('../models');

const userRoleData = [
  {
    id: 'c35388e9-3776-4d24-9dac-790339a5a95a',
    name: 'provider',
  },
  {
    id: '3382d734-2b13-4950-aeda-429808fbc3ef',
    name: 'buyer',
  },
];

const seedUserRole = async () => {
  await UserRole.bulkCreate(userRoleData, {
    individualHooks: true,
  });
};

module.exports = seedUserRole;
