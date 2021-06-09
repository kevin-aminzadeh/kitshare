// Initialize Stripe
const stripe = require('stripe')(
  process.env.STRIPE_API_SECRET_KEY || 'sk_test_F9WwVZJx7jxwQzLOuzJ5KwJS00x9Owa4dR'
);

// Create Stripe Customer Record
exports.createStripeCustomer = async (customerData) => {
  try {
    const customer = await stripe.customers.create({
      name: `${customerData.firstName} ${customerData.lastName}`,
      email: customerData.email,
    });

    return customer;
  } catch (err) {
    throw Error(err);
  }
};

// Retrieve Stripe Customer Record
exports.retrieveCustomer = async (customerId) => {
  try {
    const customer = await stripe.customers.retrieve(customerId);
    return customer;
  } catch (err) {
    throw Error(err);
  }
};

// Retrieve Stripe Customer's Payment Methods
exports.retrievePaymentMethods = async (customerId) => {
  try {
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });

    return paymentMethods;
  } catch (err) {
    throw Error(err);
  }
};

// Create Stripe SetupIntent
exports.createSetupIntent = async (customerId) => {
  try {
    const setupIntent = await stripe.setupIntents.create({
      customer: customerId,
    });
    return setupIntent;
  } catch (err) {
    throw Error(err);
  }
};

// Create Stripe Payment Intent Using Transaction Data
exports.createPaymentIntent = async (customerId, paymentMethodId, amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'aud',
      customer: customerId,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
    });

    return paymentIntent;
  } catch (err) {
    // Error code will be authentication_required if authentication is needed
    console.log('Error code is: ', err.code);
    const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
    console.log('PI retrieved: ', paymentIntentRetrieved.id);
    throw Error(err);
  }
};

// Confirm Card Payment
// exports.confirmCardPayment = async (clientSecret) => {
//   try {
//     const res = stripe.confirmCardPayment(clientSecret, {
//       payment_method:
//     })
//   } catch(err){
//     throw Error(err)
//   }
// }
