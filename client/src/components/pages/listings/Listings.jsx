import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListingCard from '../../listingCard/ListingCard';
import API from '../../../utils/API';
import TopNav from '../../topNav/TopNav';

function Listings() {
  const [listingsState, setListingsState] = useState({});

  const history = useHistory();

  const renderListings = () => {
    if (Object.keys(listingsState).length) {
      const listingCards = listingsState.data.map((listing) => (
        <div className="col-12 col-lg-4" key={listing.id}>
          <ListingCard
            id={listing.id}
            title={listing.title}
            ratingScore={4.6}
            ratingCount={13}
            price={listing.price}
            priceInterval="day"
            currencyCode="AUD"
            currencySymb="$"
            distanceCount={13}
            distanceUnit="km"
            key={listing.id}
          />
        </div>
      ));
      return listingCards;
    }
    return (
      <div className="col">
        <p className="lead">No listings were found</p>
      </div>
    );
  };

  // ComponentDidMount
  useEffect(() => {
    document.title = `Explore | Kitshare`;
    API.getAllListings().then((res) => {
      setListingsState({ ...res });
    });
  }, []);

  return (
    <>
      <TopNav>
        <div className="col">
          <ul className="navbar-nav ">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <li className="nav-item">
                  <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="btn btn-link  text-dark"
                  >
                    <span>
                      <i className="fas fa-chevron-left" />
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    onClick={() => console.log('location picker')}
                    className="btn btn-link text-dark"
                  >
                    Add a location
                  </button>
                </li>
              </div>

              <div className="filter d-flex align-items-center">
                <li className="nav-item me-1">
                  <span
                    style={{ width: '5px', borderRight: '1px solid' }}
                    className="text-muted align-middle"
                  />
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn-link text-dark">
                    <span>
                      <i className="fas fa-filter" />
                    </span>
                  </button>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </TopNav>
      <div className="container my-4 pb-5" id="listings">
        <div className="row px-3 mb-2">
          <div className="col">
            <h1 className="fs-2">300+ listings</h1>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <div className="row">{renderListings()}</div>
        </ul>
      </div>
    </>
  );
}

export default Listings;
