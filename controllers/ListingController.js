const ListingService = require('../services/ListingService');

// Create New Listing
exports.createListing = async (req, res) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error('You must be logged in to create a new listing.');
    }

    // If Request Data is Invalid, Reject Request
    if (!req.body.title || !req.body.description || !req.body.price || !req.body.location_id) {
      throw Error('Invalid Request Data.');
    }

    // Create Listing Object
    const Listing = {
      ...req.body,
      owner_id: req.session.userId,
    };

    // Create Listing in DB
    await ListingService.createListing(Listing);
    res.status(200).json('Listing Created Successfully.');
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

// Get All Listings
exports.getAllListings = async (req, res) => {
  try {
    const listingsData = await ListingService.getAll();
    res.status(200).json(listingsData);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

// Get Single Listing
exports.getListingById = async (req, res) => {
  try {
    const listingData = await ListingService.getById(req.params.id, {
      attributes: ['id', 'title', 'description', 'price'],
    });
    console.log(listingData);
    res.status(200).json(listingData);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

// Edit Listing
exports.updateListing = async (req, res) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error('You Must Be Logged In To Listing.');
    }

    // If Request Data is Invalid, Reject Request
    if (!req.body) {
      throw Error('Invalid Request Data.');
    }

    // Construct Listing Object
    const Listing = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      price_interval_id: req.body.priceIntervalId,
      location_id: req.body.locationId,
      owner_id: req.session.userId,
    };

    // Update Listing
    await ListingService.updateListing(Listing);

    res.status(200).json('Listing Successfully Updated');
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

// Delete Listing
exports.deleteListing = async (req, res) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error('You Are Not Authorized To Perform This Action.');
    }

    // If Request Data is Invalid, Reject Request
    if (!req.params.id || !req.session.userId) {
      throw Error('Invalid Request Data.');
    }

    // Request Listing Deletion from Listing Service
    await ListingService.deleteListing(req.params.id, req.session.userId);

    res.status(200).json('Listing Successfully Deleted');
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
