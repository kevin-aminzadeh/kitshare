/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Modal({ isOpen, children }) {
  const styles = {
    position: 'fixed',
    bottom: isOpen ? '0' : '-150vh',
    backgroundColor: '#fff',
    borderRadius: '1em',
    width: '100%',
    height: '95%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    transition: 'all 0.3s ease-in-out',
    zIndex: '1031',
  };

  return (
    <div className="shadow pt-2 pb-3" style={styles}>
      {children}
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Modal;
