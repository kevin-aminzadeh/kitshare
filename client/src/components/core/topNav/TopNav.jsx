import React from 'react';
import PropTypes from 'prop-types';
import { useMdMediaQuery } from '../../../utils/mediaQueryHooks';
import TopNavContentDesktop from './topNavContentDesktop/TopNavContentDesktop';

const TopNav = ({ children }) =>
  useMdMediaQuery() ? (
    <nav className="navbar navbar-expand navbar-light bg-white shadow-sm py-3 py-xl-3 py-xxl-4 sticky-top px-5">
      <div className="row mx-auto w-100 justify-content-center">
        <TopNavContentDesktop />
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand navbar-light bg-white shadow-sm py-3 py-xl-3 py-xxl-4 sticky-top px-3">
      <div className="row mx-auto w-100 justify-content-center">{children}</div>
    </nav>
  );

TopNav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

TopNav.defaultProps = {
  children: '',
};
export default TopNav;
