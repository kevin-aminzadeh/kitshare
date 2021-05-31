const router = require('express').Router();

// Create New Listing
router.post('/', () => {
  console.log('Create new listing');
});

// Update Listing
router.put('/', () => {
  console.log('Update listing');
});

// Delete Comment
router.delete('/:id', () => {
  console.log('Delete listing');
});

module.exports = router;
