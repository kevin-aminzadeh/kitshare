import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Stripe Imports
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import LandingPage from './components/pages/landing/Landing';
import Listings from './components/pages/listings/Listings';
import ListingDetails from './components/pages/listingDetails/ListingDetails';
import { AuthProvider } from './utils/authContext';
import Login from './components/pages/login/Login';
import API from './utils/API';
import Bookings from './components/pages/bookings/Bookings';
import Profile from './components/pages/profile/Profile';
import ProtectedRoute from './components/core/protectedRoute/ProtectedRoute';

// Stripe Imports
const stripePromise = loadStripe(
  process.env.STRIPE_PUBLIC_KEY || 'pk_test_ggxGmL1SDbug6gG6sBMFuCMw00XCD4YY06'
);

function App() {
  const [userState, setUserState] = useState({});

  const fetchUserData = async () => {
    const userData = await API.checkSession();
    setUserState({ ...userData.user });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AuthProvider user={userState}>
      <Elements stripe={stripePromise}>
        <Router>
          <div className="App h-100 d-flex flex-column">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <ProtectedRoute
                exact
                path="/bookings"
                component={Bookings}
                isLoggedIn={!!userState.id}
              />
              <Route exact path="/listings" component={Listings} />
              <Route exact path="/listings/cameras" component={Listings} />
              <Route exact path="/listings/lenses" component={Listings} />
              <Route exact path="/listings/lighting" component={Listings} />
              <Route exact path="/listings/audio" component={Listings} />
              <Route exact path="/listings/:id" component={ListingDetails} />
              <ProtectedRoute exact path="/login" component={Login} isLoggedIn={!userState.id} />
              <ProtectedRoute
                exact
                path="/account-settings"
                component={Profile}
                isLoggedIn={!!userState.id}
              />
            </Switch>
          </div>
        </Router>
      </Elements>
    </AuthProvider>
  );
}

export default App;
