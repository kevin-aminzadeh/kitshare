const withAuth = (req, res, next) => {
  // If the user is not logged in, respond with error
  if (!req.session.loggedIn) {
    res.status(401).json({ error: 'You are not authorized to access this resource.' });
  } else {
    // If the user is logged in, call next() to execute the route function that will allow them to access the resource
    next();
  }
};

module.exports = withAuth;
