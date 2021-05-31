const { Listing } = require('../models/index');

// Create New Listing in DB
exports.createListing = async (ListingData) => {
  try {
    const dbData = await Listing.create(ListingData);
    return dbData;
  } catch (err) {
    return err;
  }
};

exports.getAll = async () => {
  try {
    const dbData = await Listing.findAll();
    return dbData;
  } catch (err) {
    return err;
  }
};

// Update Listing Record
exports.updateListing = async (ListingData) => {
  try {
    const res = await Listing.update(
      { content: ListingData.content },
      {
        where: {
          id: ListingData.id,
          owner_id: ListingData.owner_id,
        },
      }
    );
    return res;
  } catch (err) {
    return err;
  }
};

// Delete Listing Record
exports.deleteListing = async (ListingId, userId) => {
  try {
    const res = await Listing.destroy({
      // Ensure userID === listing owner's ID
      where: {
        id: ListingId,
        owner_id: userId,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
