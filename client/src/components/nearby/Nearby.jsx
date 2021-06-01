import React from 'react';
import CategoryCard from '../categoryCard/CategoryCard';
import './scrollGallery.css';

function Nearby() {
  return (
    <div className="container px-3 px-md-0 mb-5">
      <div className="row mb-3 ps-1">
        <h2 className="fw-bold h2">Explore Nearby</h2>
        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div
        className="row flex-nowrap px-md-0 scroll-gallery-container"
        style={{ overflowX: 'scroll' }}
      >
        <CategoryCard title="Cameras" url="/listings/cameras" />
        <CategoryCard title="Lenses" url="/listings/lenses" />
        <CategoryCard title="Lighting" url="/listings/lighting" />
        <CategoryCard title="Audio" url="/listings/audio" />
      </div>
    </div>
  );
}

export default Nearby;
