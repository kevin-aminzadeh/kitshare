// Get User's Payment Methods
exports.getPaymentMethods = async (req, res) => {
  try {
    // If User is Not Logged In Throw Error
    if (!req.session.loggedIn) {
      throw Error('Unauthorized.');
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Create New Payment Method
exports.addNewPaymentMethod = async (req, res) => {
  try {
    res.send('add new payment method');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update Existing Payment Method
exports.updatePaymentMethod = async (req, res) => {};

// Delete Existing Payment Method
exports.deletePaymentMethod = async (req, res) => {};

// Get User's Payout Methods
exports.getPayoutMethods = async (req, res) => {};

// Create New Payout Method
exports.addNewPayoutMethod = async (req, res) => {};

// Update Existing Payout Method
exports.updatePayoutMethod = async (req, res) => {};

// Delete Existing Payout Method
exports.deletePayoutMethod = async (req, res) => {};

// Process Payment
exports.processPayment = async (req, res) => {};
