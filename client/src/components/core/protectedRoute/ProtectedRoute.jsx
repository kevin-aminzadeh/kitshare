/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, isLoggedIn, ...restOfProps }) {
  return (
    <Route
      {...restOfProps}
      render={(props) => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
