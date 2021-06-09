const { User } = require('../models/index');

exports.createUser = async (userData) => {
  try {
    const dbData = await User.create(userData);
    return dbData;
  } catch (err) {
    throw Error(err);
  }
};

exports.getUserByPropertyValue = async (propertyName, propertyValue) => {
  try {
    const userData = await User.findOne({
      where: {
        [propertyName]: propertyValue,
      },
    });
    return userData;
  } catch (err) {
    return err;
  }
};

exports.updateUser = async (userData) => {
  try {
    const res = await User.update(userData, {
      where: {
        id: userData.id,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
