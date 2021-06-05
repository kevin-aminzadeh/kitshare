const router = require('express').Router();
const ListingController = require('../../controllers/ListingController');

// Create New Listing
router.post('/', ListingController.createListing);

// Get All Listings
router.get('/', ListingController.getAllListings);

// Get Single Listing
router.get('/:id', ListingController.getListingById);

// Update Listing
router.put('/', () => {
  console.log('Update listing');
});

// Delete Comment
router.delete('/:id', () => {
  console.log('Delete listing');
});

module.exports = router;
