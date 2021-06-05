const { Listing, User, Location, PriceInterval } = require('../models/index');

// Create New Listing in DB
exports.createListing = async (ListingData) => {
  try {
    const dbData = await Listing.create(ListingData);
    return dbData;
  } catch (err) {
    throw Error(err);
  }
};

// Get All Listings
exports.getAll = async () => {
  try {
    const dbData = await Listing.findAll();

    // Extract Plain Data
    const listings = dbData.map((listing) => listing.get({ plain: true }));

    return listings;
  } catch (err) {
    return err;
  }
};

// Get Listing Record by ID
exports.getById = async (id, options = { attributes: [] }) => {
  try {
    const dbData = await Listing.findByPk(id, {
      attributes: options.attributes,
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['first_name', 'last_name'],
        },
        {
          model: PriceInterval,
          attributes: ['name'],
        },
        {
          model: Location,
          attributes: ['name'],
        },
      ],
    });

    const plainData = dbData.get({ plain: true });

    const listingData = {
      ...plainData,
      owner: { firstName: plainData.owner.first_name, lastName: plainData.owner.last_name },
      priceInterval: plainData.priceInterval.name,
      location: plainData.location.name,
    };
    return listingData;
  } catch (err) {
    throw Error(err);
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
    throw Error(err);
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
