import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Initialize AuthContext Context Object with initial value of NULL
const AuthContext = React.createContext(null);

// Create a Stateful Wrapper for the Context Provider
export const AuthProvider = ({ user, children }) => {
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>
  );
};

// Create a Custom Hook for Consuming Context in Child Components
export const useAuth = () => React.useContext(AuthContext);

AuthProvider.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    isVerified: PropTypes.bool,
  }),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

AuthProvider.defaultProps = {
  user: null,
};
