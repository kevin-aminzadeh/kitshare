import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageCard from '../imageCard/ImageCard';

function ListingCard({
  title,
  ratingScore,
  ratingCount,
  distanceCount,
  distanceUnit,
  price,
  currencyCode,
  currencySymb,
  priceInterval,
  url,
}) {
  return (
    <li className="list-group-item border-0 mb-2 px-0 flex-fill">
      <div className="row">
        <div className="col" style={{ minHeight: '210px' }}>
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
            <Link className="text-decoration-none text-dark" to={url}>
              <div className="carousel-inner h-100">
                <div className="carousel-item h-100 active">
                  <ImageCard
                    isSquare={false}
                    imageSrc="https://static.bhphoto.com/images/images500x500/1561852319_1274705.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <ImageCard isSquare={false} />
                </div>
                <div className="carousel-item">
                  <ImageCard isSquare={false} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Link className="text-decoration-none text-dark" to={url}>
        <div className="row mt-1">
          <div className="col">
            <p className="subtitle mb-1">
              <span className="me-2 align-baseline text-danger">
                <i className="fas fa-star fa-sm" />
              </span>
              <span className="align-baseline me-1">{ratingScore}</span>
              <span className="align-baseline text-muted">({ratingCount})</span>
            </p>
          </div>
          <div className="col text-end">
            <h2 className="fs-6 fw-light text-muted">
              {distanceCount} {distanceUnit} away
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2 className="fs-5 fw-normal">{title}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="fs-5 fw-bold">
              {currencySymb}
              {price} {currencyCode} <span className="fw-normal">/ {priceInterval}</span>
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
}

ListingCard.propTypes = {
  title: PropTypes.string.isRequired,
  ratingScore: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  distanceCount: PropTypes.number.isRequired,
  distanceUnit: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currencyCode: PropTypes.string.isRequired,
  currencySymb: PropTypes.string.isRequired,
  priceInterval: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ListingCard;
