import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AvatarImage from '../../core/avatarImage/AvatarImage';
import API from '../../../utils/API';
import DateRangePicker from '../../core/dateRangePicker/DateRangePicker';
import TopNav from '../../core/topNav/TopNav';
import BottomNav from '../../core/bottomNav/BottomNav';
import Modal from '../../core/modal/Modal';

function ListingDetails() {
  const [listing, setListing] = useState({});
  const [listingOwner, setListingOwner] = useState({});
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  const [isOpen, setOpen] = useState(false);

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    document.title = `Canon 5D Mark IV | Kitshare`;

    async function fetchListingData() {
      const listingData = await API.getListingbyId(params.id);
      setListing(listingData);
      setListingOwner(listingData.owner);
    }

    fetchListingData();
  }, []);

  return (
    <>
      {!isOpen && (
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
                </div>
              </div>
            </ul>
          </div>
        </TopNav>
      )}

      <div className="container mt-5 pb-5">
        <div id="listingDetails">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div
                id="listingItemCarousel"
                className="carousel slide h-100"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators mb-2">
                  <button
                    type="button"
                    data-bs-target="#listingItemCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#listingItemCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#listingItemCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  />
                </div>

                <div className="carousel-inner h-100">
                  <div className="carousel-item h-100 active">
                    <img
                      className="d-block w-100"
                      src="https://static.bhphoto.com/images/images1000x1000/1561852319_1274705.jpg"
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col" />
                <h1>{listing.title}</h1>
              </div>
              <div className="row">
                <div className="col">
                  {Object.keys(listing) && (
                    <h2 className="fs-6 fw-normal text-muted text-capitalize">
                      {listing.location}, South Australia
                    </h2>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {Object.keys(listing) && (
                    <h3 className="fs-5 fw-bold">
                      ${listing.price} AUD <span className="fw-normal">/ Day</span>
                    </h3>
                  )}
                </div>
              </div>
              <div className="row ">
                <div className="col">
                  <hr />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-auto">
                  <AvatarImage />
                </div>
                <div className="col text-start h-100">
                  {listingOwner.firstName && (
                    <h3 className="text-capitalize fs-6 mb-0">
                      owned by {listingOwner.firstName} {listingOwner.lastName}
                    </h3>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="mb-0">{listing.description}</p>
                </div>
              </div>
              <div className="row mb-5 w-100 justify-content-center">
                <DateRangePicker bookings={listing.bookings} dates={dates} setDates={setDates} />
              </div>
              <div className="row my-3">
                <div className="col">
                  <hr />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <h2 className="fs-3">Select {dates.startDate ? 'drop-off' : 'pick-up'} date</h2>
                  <p className="mb-0 fs-6 text-muted">
                    {dates.startDate && dates.endDate
                      ? `${dates.startDate.format('D MMMM YYYY')} - ${dates.endDate.format(
                          'D MMMM YYYY'
                        )}`
                      : 'Add your usage dates for exact pricing'}
                  </p>
                </div>
              </div>
            </div>
          </div>

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
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn btn-link link-dark "
                    onClick={() => setOpen(false)}
                  >
                    Clear dates
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <h2 className="fs-3">Select {dates.startDate ? 'drop-off' : 'pick-up'} date</h2>
                  <p className="mb-0 fs-6 text-muted">
                    {dates.startDate && dates.endDate
                      ? `${dates.startDate.format('D MMMM YYYY')} - ${dates.endDate.format(
                          'D MMMM YYYY'
                        )}`
                      : 'Add your usage dates for exact pricing'}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <BottomNav>
        <div className="container-fluid">
          <div className="row align-items-center w-100 my-2">
            <div className="col">
              <div className="row">
                <h6 className="h5 mb-0">
                  $508.33
                  <span className="fs-6 fw-light "> total</span>
                </h6>
              </div>
              <div className="row">
                <div className="col">
                  <button type="button" className="btn btn-link link-dark fs-6 fw-bold p-0">
                    3 Aug - 6 Aug
                  </button>
                </div>
              </div>
            </div>
            <div className="col text-end">
              <button
                type="button"
                className="btn btn-lg btn-primary rounded-3 px-4"
                onClick={() => setOpen(true)}
              >
                {dates.startDate && dates.endDate ? 'Reserve' : 'Check Availability'}
              </button>
            </div>
          </div>
        </div>
      </BottomNav>
    </>
  );
}

export default ListingDetails;
