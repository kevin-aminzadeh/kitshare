import React from 'react';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <div className="container px-4 position-relative mb-5">
      <div className="row">
        <div className="col p-0 position-relative overflow-hidden" style={{ height: '400px' }}>
          <picture>
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt=""
              className="rounded-3"
              style={{ objectFit: 'cover', verticalAlign: 'bottom', width: '100%', height: '100%' }}
            />
          </picture>
          <div className="d-block w-100 h-100 position-absolute top-0">
            <div
              className="d-flex flex-column h-100 w-100 position-absolute justify-content-center px-5 text-lg-start "
              style={{ width: '544px' }}
            >
              <div className="row">
                <h2 className="display-5 fw-bold">Our Top Picks</h2>
              </div>
              <div className="row">
                <p className="lead">Kitshare&apos;s curated list of the best equipment.</p>
              </div>
              <div className="row">
                <div className="col">
                  <Link className="btn btn-dark rounded-3 py-3 px-4 fw-bold" to="/top-picks">
                    Get Inspired
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
