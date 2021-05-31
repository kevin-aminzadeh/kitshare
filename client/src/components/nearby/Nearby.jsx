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
        <CategoryCard
          title="Cameras"
          imageSrc="https://www.bhphotovideo.com/images/images2500x2500/sony_ilce7sm3_b_alpha_a7s_iii_mirrorless_1577838.jpg"
          url="/listings/cameras"
        />
        <CategoryCard
          title="Lenses"
          imageSrc="https://static.bhphoto.com/images/images500x500/1472082712_1274708.jpg"
          url="/listings/lenses"
        />
        <CategoryCard
          title="Lighting"
          imageSrc="https://static.bhphoto.com/images/images500x500/1611006348_1618069.jpg"
          url="/listings/lighting"
        />
        <CategoryCard
          title="Audio"
          imageSrc="https://static.bhphoto.com/images/multiple_images/images500x500/1622035812_IMG_1540239.jpg"
          url="/listings/audio"
        />
      </div>
    </div>
  );
}

export default Nearby;
