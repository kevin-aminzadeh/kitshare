import React, { useEffect, useState } from 'react';
import ListingCard from '../../listingCard/ListingCard';
import API from '../../../utils/API';

function Listings() {
  const [listingsState, setListingsState] = useState({});

  const renderListings = () => {
    if (Object.keys(listingsState).length) {
      const listingCards = listingsState.data.map((listing) => (
        <div className="col-12 col-md-4" key={listing.id}>
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
  );
}

export default Listings;
