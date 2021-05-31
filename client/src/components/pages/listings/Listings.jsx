import React, { useEffect } from 'react';
import ListingCard from '../../listingCard/ListingCard';

function Listings() {
  useEffect(() => {
    document.title = `Explore | Kitshare`;
  }, []);
  return (
    <div className="container my-4 pb-5" id="listings">
      <div className="row px-3 mb-2">
        <div className="col">
          <h1 className="fs-2">300+ listings</h1>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <div className="row">
          <div className="col-12 col-md-4 ">
            <ListingCard
              title="Canon 5D Mark IV"
              ratingScore={4.6}
              ratingCount={13}
              price={130}
              priceInterval="day"
              currencyCode="AUD"
              currencySymb="$"
              distanceCount={13}
              distanceUnit="km"
              url="/listings/1"
            />
          </div>
          <div className="col-12 col-md-4 ">
            <ListingCard
              title="Canon 5D Mark IV"
              ratingScore={4.6}
              ratingCount={13}
              price={130}
              priceInterval="day"
              currencyCode="AUD"
              currencySymb="$"
              distanceCount={13}
              distanceUnit="km"
              url="/listings/1"
            />
          </div>
          <div className="col-12 col-md-4 ">
            <ListingCard
              title="Canon 5D Mark IV"
              ratingScore={4.6}
              ratingCount={13}
              price={130}
              priceInterval="day"
              currencyCode="AUD"
              currencySymb="$"
              distanceCount={13}
              distanceUnit="km"
              url="/listings/1"
            />
          </div>
          <div className="col-12 col-md-4 ">
            <ListingCard
              title="Canon 5D Mark IV"
              ratingScore={4.6}
              ratingCount={13}
              price={130}
              priceInterval="day"
              currencyCode="AUD"
              currencySymb="$"
              distanceCount={13}
              distanceUnit="km"
              url="/listings/1"
            />
          </div>
          <div className="col-12 col-md-4 ">
            <ListingCard
              title="Canon 5D Mark IV"
              ratingScore={4.6}
              ratingCount={13}
              price={130}
              priceInterval="day"
              currencyCode="AUD"
              currencySymb="$"
              distanceCount={13}
              distanceUnit="km"
              url="/listings/1"
            />
          </div>
          <div className="col-12 col-md-4 ">
            <ListingCard
              title="Canon 5D Mark IV"
              ratingScore={4.6}
              ratingCount={13}
              price={130}
              priceInterval="day"
              currencyCode="AUD"
              currencySymb="$"
              distanceCount={13}
              distanceUnit="km"
              url="listings/1"
            />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Listings;
