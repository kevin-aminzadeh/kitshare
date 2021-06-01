const router = require('express').Router();
const ListingController = require('../../controllers/ListingController');

// Create New Listing
router.post('/', () => {
  console.log('Create new listing');
});

// Get All Listings
router.get('/', ListingController.getAllListings);

// Update Listing
router.put('/', () => {
  console.log('Update listing');
});

// Delete Comment
router.delete('/:id', () => {
  console.log('Delete listing');
});

module.exports = router;
