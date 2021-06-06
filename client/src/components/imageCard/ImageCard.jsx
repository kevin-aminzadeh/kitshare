import React from 'react';
import PropTypes from 'prop-types';

function ImageCard({ isSquare, rounded, imageSrc }) {
  return (
    <div
      className="card-wrapper d-flex w-100 position-relative"
      style={isSquare ? { paddingBottom: '100%' } : { height: '180px' }}
    >
      <picture className={isSquare ? 'd-flex position-absolute top-0 bottom-0 w-100' : 'w-100'}>
        <img
          src={imageSrc}
          alt=""
          className={`rounded-${rounded ? '3' : '0'}`}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            verticalAlign: 'bottom',
            width: '100%',
            height: '100%',
          }}
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
  imageSrc:
    'https://github.com/kevin-aminzadeh/bootstrap-responsive-portfolio/blob/main/dist/assets/img/projects/placeholder.png?raw=true',
};

export default ImageCard;
