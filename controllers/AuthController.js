const AuthService = require('../services/AuthService');

// Create New User
exports.register = async (req, res) => {
  try {
    // If User is Already Logged In Throw Error
    if (req.session.loggedIn) {
      throw Error('You Are Currently Logged In.');
    }

    // Validate Request Data
    if (!req.body.email || !req.body.password) {
      throw Error('Invalid Request. Please Provide All Required Information.');
    }

    // Create User in DB
    const userData = await AuthService.createUser({ ...req.body, dob: Date.parse(req.body.dob) });

    // Update User's Session Data
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.userRole = userData.role;
      req.session.loggedIn = true;
      req.session.isVerified = true;
      req.session.userFirstName = userData.firstName;
      res.status(201).json('User Account Created Successfully.');
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login
exports.logIn = async (req, res) => {
  try {
    // If User is Already Logged In Throw Error
    if (req.session.loggedIn) {
      throw Error('You Are Currently Logged In.');
    }

    // Validate Request Data
    if (!req.body.email || !req.body.password) {
      throw Error('Incorrect Email or Password, Please Try Again.');
    }

    // Fetch User Record From AuthService
    const userData = await AuthService.getUserByEmail(req.body.email);

    // Run Password Validation Check
    const validPassword = await userData.checkPassword(req.body.password);

    // If Password is Invalid Throw Error
    if (!validPassword) {
      throw Error('Incorrect Email or Password, Please Try Again.');
    }

    // Update User's Session Data
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.userRole = userData.role_id;
      req.session.loggedIn = true;
      req.session.isVerified = true;
      req.session.userFirstName = userData.first_name;
      res.status(200).json('Login Successful.');
    });
  } catch (err) {
    res.status(400).send(err.toString());
  }
};

// Logout
exports.logOut = async (req, res) => {
  try {
    // If User Is Logged In, Destroy Session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(200).json('Logout Successful.');
      });
      return;
    }

    throw Error('Unauthorized.');
  } catch (err) {
    res.status(401).json(err.toString());
  }
};
