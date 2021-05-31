import React from 'react';
import PropTypes from 'prop-types';

function ImageCard({ isSquare, rounded, imageSrc }) {
  return (
    <div
      className="card-wrapper d-flex h-100 w-100 position-relative"
      style={isSquare ? { paddingBottom: '100%' } : {}}
    >
      <picture className={isSquare ? 'd-flex position-absolute top-0 bottom-0' : ''}>
        <img
          src={imageSrc}
          alt=""
          className={`rounded-${rounded ? '3' : '0'}`}
          style={{ objectFit: 'cover', verticalAlign: 'bottom', width: '100%', height: '100%' }}
        />
      </picture>
    </div>
  );
}

ImageCard.propTypes = {
  isSquare: PropTypes.bool,
  rounded: PropTypes.bool,
  imageSrc: PropTypes.string,
};

ImageCard.defaultProps = {
  isSquare: true,
  rounded: true,
  imageSrc: 'https://static.bhphoto.com/images/images500x500/1561852319_1274705.jpg',
};

export default ImageCard;
