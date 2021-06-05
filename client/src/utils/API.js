import axios from 'axios';

export default {
  // Get All Listings
  getAllListings: async () => {
    const response = await axios.get(`/api/listings`);
    const listingsData = response.data;
    return { data: listingsData, meta: { count: listingsData.length } };
  },

  // Get Listing by ID
  getListingbyId: async (id) => {
    const response = await axios.get(`/api/listings/${id}`);
    const listingData = response.data;
    return listingData;
  },

  // Save Listing To Database
  createListing: (listingData) => axios.post('/api/listings', listingData),

  // Delete Saved Book With Given ID
  deleteListing: (id) => axios.delete(`/api/listings/${id}`),

  // Create New Booking
  createNewBooking: async (bookingData) => {
    try {
      const response = await axios.post('/api/bookings', bookingData);
      return response;
    } catch (err) {
      return err;
    }
  },
};
