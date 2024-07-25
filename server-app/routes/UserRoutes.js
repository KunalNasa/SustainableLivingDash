const express = require('express');
const {registerUser, loginUser, getUserInfo} = require('../controllers/userController');
const validiateToken = require('../middleware/validiateTokenHandler');
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getInfo", validiateToken, getUserInfo);

module.exports = router