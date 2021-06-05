const { User } = require('../models/index');

exports.createUser = async (userData) => {
  try {
    const dbData = await User.create(userData);
    return dbData;
  } catch (err) {
    throw Error(err);
  }
};

exports.getUserByEmail = async (userEmail) => {
  try {
    const userData = await User.findOne({
      where: {
        email: userEmail,
      },
    });
    return userData;
  } catch (err) {
    return err;
  }
};
