/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ImageCard from '../imageCard/ImageCard';

function BookingCard({ booking: { ...booking } }) {
  console.log(booking);
  const timeFrom = moment(booking.time_from).format('DD MMM YYYY');
  const timeTo = moment(booking.time_to).format('DD MMM YYYY');
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Link to="/bookings/1" className="text-decoration-none">
        <div className="row g-0 align-items-center rounded-3 h-100">
          <div className="col-3 col-md-12 ">
            <ImageCard
              imageSrc="https://i.pinimg.com/564x/73/f8/92/73f89260adc8e5bad38a416e15ecbc57.jpg"
              rounded
            />
          </div>
          <div className="col">
            <div className="card-body h-100 align-items-center">
              <div className="col">
                <h3 className="fs-6 mb-1 text-dark">{booking.listing.title}</h3>
                <h4 className="text-muted fs-6 fw-light mb-1 text-capitalize">
                  Owned by {booking.listing.owner.first_name}
                </h4>
                <h5 className="subtitle text-dark fs-6 fw-light">
                  {timeFrom} - {timeTo}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BookingCard;
