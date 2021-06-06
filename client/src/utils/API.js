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

  // Log User In
  login: async (credentials) => {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      return response;
    } catch (err) {
      throw Error(err);
    }
  },

  // Check Server-Side Session To Determine if User is Logged In
  checkSession: async () => {
    try {
      const response = await axios.get('/api/auth/session');

      return response.data;
    } catch (err) {
      throw Error(err);
    }
  },

  // Log User Out
  logout: async () => {
    try {
      const response = await axios.post('/api/auth/logout');
      return response;
    } catch (err) {
      throw Error(err);
    }
  },
};
