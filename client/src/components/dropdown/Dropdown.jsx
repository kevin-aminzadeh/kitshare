import React from 'react';
import PropTypes from 'prop-types';

function Dropdown({ isOpen, children }) {
  return (
    <ul className={`${isOpen ? 'show' : ''} dropdown-menu`} aria-labelledby="dropdownMenuButton1">
      {children}
    </ul>
  );
}

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Dropdown;
