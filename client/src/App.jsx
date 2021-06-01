import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/pages/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Listings from './components/pages/listings/Listings';
import ListingDetails from './components/pages/listingDetails/ListingDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/listings/cameras" component={Listings} />
          <Route exact path="/listings/lenses" component={Listings} />
          <Route exact path="/listings/lighting" component={Listings} />
          <Route exact path="/listings/audio" component={Listings} />
          <Route path="/listings/:id" component={ListingDetails} />
          <Route path="*" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
