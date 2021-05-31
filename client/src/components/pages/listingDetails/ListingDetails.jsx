import React, { useEffect } from 'react';
import AvatarImage from '../../avatarImage/AvatarImage';

function ListingDetails() {
  useEffect(() => {
    document.title = `Canon 5D Mark IV | Kitshare`;
  });
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
              <h1>Canon 5D Mark IV</h1>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="fs-6 fw-normal text-muted">Seacombe Heights, South Australia</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className="fs-5 fw-bold">
                  $130 AUD <span className="fw-normal">/ Day</span>
                </h3>
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
                <h3 className="text-capitalize fs-6 mb-0">owned by Billy Bob</h3>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur harum
                  non. Quisquam consectetur eaque ducimus minus pariatur veritatis qui reiciendis
                  magnam, saepe nisi soluta maiores, optio in porro ad.
                </p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col">
                <hr />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <h2 className="fs-3">Select Pickup Date</h2>
                <p className="mb-0 fs-6 text-muted">Add your usage dates for exact pricing</p>
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
