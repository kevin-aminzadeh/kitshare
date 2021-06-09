import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
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
            <h2 className="fs-3">Select Payment Method</h2>
            <p className="lead fs-6">Choose how you&apos;d like to pay for this booking.</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col-2 text-center">Visa</div>
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <span>Visa ***** 1234</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>Expiry: 01/2020</p>
                    </div>
                  </div>
                </div>
                <div className="col text-end">
                  <button type="button" className="btn btn-outline-dark">
                    ...
                  </button>
                </div>
                <div className="row">
                  <div className="col">
                    <hr />
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <button type="button" className="btn btn-primary" disabled={!stripe}>
                    Pay
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark ms-3"
                    onClick={() => setOpen(false)}
                  >
                    Add payment method
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
