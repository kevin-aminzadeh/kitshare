const { Listing } = require('../models/index');

// Create New Listing in DB
exports.createListing = async (ListingData) => {
  const dbData = await Listing.create(ListingData);
  return dbData;
};

// Update Listing Record
exports.updateListing = async (ListingData) => {
  const res = await Listing.update(
    { content: ListingData.content },
    {
      where: {
        id: ListingData.id,
      },
    }
  );
  return res;
};

// Delete Listing Record
exports.deleteListing = async (ListingId, userId) => {
  const res = await Listing.destroy({
    where: {
      id: ListingId,
      owner_id: userId,
    },
  });
  return res;
};
