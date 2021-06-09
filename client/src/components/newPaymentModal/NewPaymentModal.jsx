import React, { useState } from 'react';
import axios from 'axios';
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
// import './cardSection.css';
import Modal from '../core/modal/Modal';

function NewPaymentModal() {
  const [isOpen, setOpen] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const clientSecret = await axios.post('/api/payments');

    const result = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      },
    });

    if (result.error) {
      // Display result.error.message in your UI.
      console.log(result.error);
    } else {
      // The setup has succeeded. Display a success message and send
      // result.setupIntent.payment_method to your server to save the
      // card to a Customer
      console.log('success!');
      console.log(result);
    }
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="container-fluid mt-4">
        <div className="row justify-content-between mb-3">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-link link-dark text-decoration-none fw-bold Close "
              onClick={() => setOpen(false)}
            >
              <span>
                <i className="fas fa-times" />
              </span>
            </button>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <h2 className="fs-3">Add payment method</h2>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <h3 className="fs-6">Card info</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <CardNumberElement
                    className="form-control py-3"
                    options={{ placeholder: 'Card Number' }}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <CardExpiryElement
                    className="form-control py-3"
                    options={{ placeholder: 'Expiry' }}
                  />
                </div>
                <div className="col">
                  <CardCvcElement className="form-control py-3" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h3 className="fs-6">Billing info</h3>
                  <input
                    type="text"
                    name="postCode"
                    className="form-control py-3"
                    placeholder="Postcode"
                  />
                </div>
                <div className="col">
                  <h3 className="fs-6">Country/Region</h3>
                  <select
                    className="form-select py-3"
                    aria-label="Default select example"
                    defaultValue="1"
                  >
                    <option value="1">Australia</option>
                    <option value="2">New Zealand</option>
                  </select>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <button type="button" className="btn btn-primary" disabled={!stripe}>
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark ms-3"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NewPaymentModal;
