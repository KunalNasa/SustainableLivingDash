const express = require('express');
const {postData, getData} = require('../controllers/footPrintController');
const validiateToken = require('../middleware/validiateTokenHandler');

const router = express.Router();

router.use(validiateToken)
router.route("/").post(postData).get(getData)

module.exports = router