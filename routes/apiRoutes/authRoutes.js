const router = require('express').Router();
const AuthController = require('../../controllers/AuthController');

// Create New User Account
router.post('/', AuthController.register);

// Log User In
router.post('/login', AuthController.logIn);

// Log User Out
router.post('/logout', AuthController.logOut);

module.exports = router;
