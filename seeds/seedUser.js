const { User } = require('../models');

const userData = [
  {
    id: '11293394-4170-4764-8260-f4722c88ca3c',
    first_name: 'kevin',
    last_name: 'eleven',
    dob: new Date(1994, 7, 18),
    street_address: '7 fake avenue',
    mobile: '0444444444',
    email: 'kevin@example.com',
    password: 'password123',
    is_verified: 'true',
    role_id: 'c35388e9-3776-4d24-9dac-790339a5a95a',
    location_id: '1836ae47-2e1b-406b-abf6-aab048913255',
  },
  {
    id: 'c6e70b9c-da7f-4726-bb71-e1848c18a9ba',
    first_name: 'oliver',
    last_name: 'twist',
    dob: new Date(1973, 3, 23),
    street_address: '321 fake avenue',
    mobile: '0444444443',
    email: 'oliver@example.com',
    password: 'password123',
    is_verified: 'true',
    role_id: 'c35388e9-3776-4d24-9dac-790339a5a95a',
    location_id: '38eb17e3-6f19-4bf3-81ca-739e0bfb22ff',
  },
  {
    id: '60242c4c-2175-48a0-a058-c8eb830b77b7',
    first_name: 'jane',
    last_name: 'doe',
    dob: new Date(1990, 5, 10),
    street_address: '123 fake avenue',
    mobile: '0444444441',
    email: 'jane@example.com',
    password: 'password123',
    is_verified: 'true',
    role_id: '3382d734-2b13-4950-aeda-429808fbc3ef',
    location_id: 'aed28563-60a7-4be1-8990-888192a30cc7',
  },
  {
    id: '2c356a0a-c548-4be8-ad78-f5b5d5b47a38',
    first_name: 'john',
    last_name: 'smith',
    dob: new Date(1983, 1, 11),
    street_address: '123 fake avenue',
    mobile: '0444444442',
    email: 'john@example.com',
    password: 'password123',
    is_verified: 'true',
    role_id: '3382d734-2b13-4950-aeda-429808fbc3ef',
    location_id: '7d7a6de4-a614-4bcf-89cb-2fe0f0080fab',
  },
];

const seedUser = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
  });
};

module.exports = seedUser;
