const router = require('express').Router();
const withAuth = require('../../utils/withAuth');
const BillingController = require('../../controllers/BillingController');

// Get User's Payment Methods
router.get('/payment-methods', withAuth, BillingController.getPaymentMethods);

// Add New Payment Method
router.post('/payment-methods', withAuth, BillingController.addNewPaymentMethod);

// Update Payment Method
router.put('/payment-methods', withAuth, BillingController.updatePaymentMethod);

// Delete Payment Method
router.delete('/payment-methods/:id', withAuth, BillingController.deletePaymentMethod);

// Get User's Payout Methods
router.get('/payout-methods', withAuth, BillingController.getPayoutMethods);

// Add New Payout Method
router.post('/payout-methods', withAuth, BillingController.addNewPayoutMethod);

// Update Payout Method
router.put('/payout-methods', withAuth, BillingController.updatePayoutMethod);

// Delete Payout Method
router.delete('/payout-methods', withAuth, BillingController.deletePayoutMethod);

// Process Payment
router.post('/pay', withAuth, BillingController.processPayment);

module.exports = router;
