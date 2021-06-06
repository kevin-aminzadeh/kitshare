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
      req.session.user = {
        id: userData.id,
        firstName: userData.first_name,
        lastName: userData.last_name,
        roleId: userData.role_id,
        isVerified: true,
      };
      req.session.loggedIn = true;
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
    const userData = await AuthService.getUserByPropertyValue('email', req.body.email);

    // Run Password Validation Check
    const validPassword = await userData.checkPassword(req.body.password);

    // If Password is Invalid Throw Error
    if (!validPassword) {
      throw Error('Incorrect Email or Password, Please Try Again.');
    }

    // Update User's Session Data
    req.session.save(() => {
      req.session.user = {
        id: userData.id,
        firstName: userData.first_name,
        lastName: userData.last_name,
        roleId: userData.role_id,
        isVerified: true,
      };
      req.session.loggedIn = true;

      res.status(200).json({ message: 'Login Successful.', user: req.session.user });
    });
  } catch (err) {
    res.status(400).send(err.toString());
  }
};

// Send Back User's Session Data
exports.getSessionData = async (req, res) => {
  try {
    // If User is Logged In, Return User Object from Session
    if (req.session.loggedIn) {
      res.status(200).json({ loggedIn: req.session.loggedIn, user: req.session.user });
    }
    // Else Return "loggedIn: false"
    else {
      res.status(200).json({ loggedIn: false });
    }
  } catch (err) {
    res.status(400).send(err);
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
