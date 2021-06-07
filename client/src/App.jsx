import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/pages/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Listings from './components/pages/listings/Listings';
import ListingDetails from './components/pages/listingDetails/ListingDetails';
import { AuthProvider } from './utils/authContext';
import Login from './components/pages/login/Login';
import API from './utils/API';
import Bookings from './components/pages/bookings/Bookings';
import Profile from './components/pages/profile/Profile';

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
      <Router>
        <div className="App h-100 d-flex flex-column">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/bookings" component={Bookings} />
            <Route exact path="/listings" component={Listings} />
            <Route exact path="/listings/cameras" component={Listings} />
            <Route exact path="/listings/lenses" component={Listings} />
            <Route exact path="/listings/lighting" component={Listings} />
            <Route exact path="/listings/audio" component={Listings} />
            <Route exact path="/listings/:id" component={ListingDetails} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/account-settings" component={Profile} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
