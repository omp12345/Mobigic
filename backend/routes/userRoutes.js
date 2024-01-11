const express = require('express');
const router = express.Router();


const { registerUser, loginUser, logoutuser } = require('../controller/userController');


// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login',loginUser );
router.get("/logout",logoutuser)

module.exports = router;
