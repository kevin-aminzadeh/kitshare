import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CategoryCard({ title, imageSrc, imageAlt, mobileColWidth, desktopColWidth, url }) {
  const renderTitle = () => {
    if (title) {
      return <h3 className="h5 mt-2">{title}</h3>;
    }
    return '';
  };

  return (
    <div
      className={`col-${mobileColWidth} col-md-5 col-lg-${desktopColWidth} h-100 px-2 position-relative overflow-hidden category-card`}
    >
      <Link to={url} className="text-decoration-none text-dark">
        <div className="card-wrapper w-100 position-relative" style={{ paddingBottom: '100%' }}>
          <picture className="d-flex position-absolute top-0 bottom-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded"
              style={{
                objectFit: 'cover',
                verticalAlign: 'bottom',
                width: '100%',
                height: '100%',
              }}
            />
          </picture>
        </div>
        {renderTitle()}
      </Link>
    </div>
  );
}

// Declare Component Prop Types
CategoryCard.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  mobileColWidth: PropTypes.number,
  desktopColWidth: PropTypes.number,
  url: PropTypes.string,
};

// Declare Default Prop Values
CategoryCard.defaultProps = {
  title: '',
  imageSrc:
    'https://github.com/kevin-aminzadeh/bootstrap-responsive-portfolio/blob/main/dist/assets/img/projects/placeholder.png?raw=true',
  imageAlt: '',
  mobileColWidth: 10,
  desktopColWidth: 3,
  url: '/',
};

export default CategoryCard;
