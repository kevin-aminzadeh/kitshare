const router = require('express').Router();
const AuthController = require('../../controllers/AuthController');

// Create New User Account
router.post('/', AuthController.register);

// Check User Session To Determine if User is Logged In
router.get('/session', AuthController.getSessionData);

// Log User In
router.post('/login', AuthController.logIn);

// Log User Out
router.post('/logout', AuthController.logOut);

module.exports = router;
