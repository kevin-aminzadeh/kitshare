import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import API from '../../../utils/API';
import BookingCard from '../../bookingCard/BookingCard';

function Bookings() {
  const tab = new URLSearchParams(useLocation().search).get('tab');
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const bookingsData = await API.getAllBookings();

    setBookings(bookingsData);
  };

  const renderBookings = (type) => {
    if (!bookings.length) {
      return <p>No Bookings to display.</p>;
    }

    if (type === 'past') {
      return bookings
        .filter((booking) => moment(booking.time_from).isBefore(moment()))
        .map((booking) => <BookingCard booking={booking} key={booking.id} />);
    }

    return bookings
      .filter((booking) => !moment(booking.time_from).isBefore(moment()))
      .map((booking) => <BookingCard booking={booking} key={booking.id} />);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div id="bookings" className="container my-4 pb-5">
      <div className="row mb-5">
        <div className="col">
          <h1 className="fw-bolder">Bookings</h1>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                className="nav-link link-secondary"
                exact
                to="/bookings?tab=upcoming"
                isActive={(match, location) => {
                  if (!match) {
                    return false;
                  }

                  const searchParams = new URLSearchParams(location.search);
                  return (
                    (match.isExact && searchParams.get('tab') === 'upcoming') ||
                    !searchParams.get('tab')
                  );
                }}
              >
                Upcoming
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link link-secondary"
                exact
                to="/bookings?tab=past"
                isActive={(match, location) => {
                  if (!match) {
                    return false;
                  }

                  const searchParams = new URLSearchParams(location.search);
                  return match.isExact && searchParams.get('tab') === 'past';
                }}
              >
                Past
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <ul className="list-group list-group-flush px-3">
        <div className="row">{renderBookings(tab)}</div>
      </ul>
    </div>
  );
}

export default Bookings;
