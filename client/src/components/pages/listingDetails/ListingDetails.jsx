import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import AvatarImage from '../../avatarImage/AvatarImage';
import API from '../../../utils/API';

function ListingDetails() {
  const [listing, setListing] = useState({});
  const [listingOwner, setListingOwner] = useState({});
  const [dates, setDates] = useState({ startDate: null, endDate: null });
  const defaultFocusedInput = null;
  const [focusedInput, setFocusedInput] = useState(defaultFocusedInput);

  const params = useParams();

  const fetchlistingData = async () => {
    const listingData = await API.getListingbyId(params.id);
    setListing(listingData);
    setListingOwner(listingData.owner);
  };

  useEffect(async () => {
    document.title = `Canon 5D Mark IV | Kitshare`;

    await fetchlistingData();
  }, []);

  return (
    <div className="container mt-5 pb-5">
      <div id="listingDetails">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div id="listingItemCarousel" className="carousel slide h-100" data-bs-ride="carousel">
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
                  <h2 className="fs-6 fw-normal text-muted">Seacombe Heights, South Australia</h2>
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
            <div className="row my-3">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <h2 className="fs-3">Select Booking Dates</h2>
                <p className="mb-0 fs-6 text-muted">Add your usage dates for exact pricing</p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <DateRangePicker
                  startDate={dates.startDate}
                  startDateId="start-date"
                  endDateId="end-date"
                  endDate={dates.endDate}
                  onDatesChange={(selectedDates) => {
                    setDates(selectedDates);
                  }}
                  focusedInput={focusedInput}
                  onFocusChange={(currentFocusedInput) => setFocusedInput(currentFocusedInput)}
                  initialVisibleMonth={() => moment()}
                  numberOfMonths={1}
                  hideKeyboardShortcutsPanel
                  isDayBlocked={() => moment().isBefore()}
                  required
                  withPortal
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12">
                <button type="button" className="btn btn-lg btn-primary rounded w-100">
                  Make Booking
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-sm px-3 mt-4" />
      </div>
    </div>
  );
}

export default ListingDetails;
