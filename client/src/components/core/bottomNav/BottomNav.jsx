import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMdMediaQuery } from '../../../utils/mediaQueryHooks';
import { useAuth } from '../../../utils/authContext';

const BottomNav = ({ children }) => {
  const { currentUser } = useAuth();

  return (
    !useMdMediaQuery() && (
      <nav className="navbar fixed-bottom navbar-light bg-white border-top" role="navigation">
        {children || (
          <ul
            className={`navbar-nav d-flex flex-row justify-content-around  mx-auto ${
              currentUser.id ? 'w-100' : 'w-50'
            }`}
          >
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <i className="fas fa-search fa-lg text-center mb-1" />
                  <div className="fs-6">
                    <small>Explore</small>
                  </div>
                </div>
              </NavLink>
            </li>
            {currentUser.id ? (
              <li className="nav-item">
                <NavLink to="/bookings" className="nav-link">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <i className="fas fa-receipt fa-lg text-center mb-1" />
                    <div className="fs-6">
                      <small>Bookings</small>
                    </div>
                  </div>
                </NavLink>
              </li>
            ) : (
              ''
            )}

            {currentUser.id ? (
              <li className="nav-item">
                <NavLink to="/inbox" className="nav-link">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <i className="fas fa-inbox fa-lg text-center mb-1" />
                    <div className="fs-6">
                      <small>Inbox</small>
                    </div>
                  </div>
                </NavLink>
              </li>
            ) : (
              ''
            )}

            <li className="nav-item">
              <NavLink to={currentUser.id ? '/account-settings' : '/login'} className="nav-link">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <i className="far fa-user fa-lg text-center mb-1" />
                  <div className="fs-6">
                    <small>{currentUser.id ? 'Profile' : 'Login'}</small>
                  </div>
                </div>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    )
  );
};

BottomNav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

BottomNav.defaultProps = {
  children: '',
};

export default BottomNav;
