import axios from 'axios';

export default {
  // Get All Listings
  getAllListings: async () => {
    const response = await axios.get(`/api/listings`);
    const listingsData = response.data;
    return listingsData;
  },

  // Save Book To Database
  saveBook: (bookData) => axios.post('/api/books', bookData),
  // Delete Saved Book With Given ID
  deleteSavedBook: (id) => axios.delete(`/api/books/${id}`),
};
