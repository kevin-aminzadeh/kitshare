import React from 'react';
import ImageCard from '../imageCard/ImageCard';

function Categories() {
  return (
    <div className="container px-0 position-relative mb-5">
      <div className="row">
        <div className="col-12 p-0 mb-3">
          <ImageCard isSquare={false} />
        </div>
        <div className="col">
          <div className="row px-3">
            <div className="col-6 mb-3">
              <ImageCard />
            </div>
            <div className="col-6  mb-3">
              <ImageCard />
            </div>
            <div className="col-6">
              <ImageCard />
            </div>
            <div className="col-6">
              <ImageCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
