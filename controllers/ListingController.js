const ListingService = require('../services/ListingService');

// Create New Listing
exports.createListing = async (req, res) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error('You Must Be Logged In To Listing.');
    }

    // If Request Data is Invalid, Reject Request
    if (!req.body.content || !req.body.postId) {
      throw Error('Invalid Request Data.');
    }

    // Create Listing Object
    const Listing = {
      content: req.body.content,
      owner_id: req.session.userId,
      post_id: req.body.postId,
    };

    // Create Listing in DB
    await ListingService.createListing(Listing);
    res.status(200).json('Listing Created Successfully.');
  } catch (err) {
    res.status(400).json(err.toString());
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
    if (!req.body.content || !req.body.postId || !req.body.id) {
      throw Error('Invalid Request Data.');
    }

    // Construct Listing Object
    const Listing = {
      id: req.body.id,
      content: req.body.content,
      owner_id: req.session.userId,
      post_id: req.body.postId,
    };

    // Update Listing
    await ListingService.updateListing(Listing);

    res.status(200).json('Listing Successfully Updated');
  } catch (err) {
    res.status(400).json(err.toString());
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

    // Delete Listing
    await ListingService.deleteListing(req.params.id, req.session.userId);

    res.status(200).json('Listing Successfully Deleted');
  } catch (err) {
    res.status(400).json(err.toString());
  }
};
