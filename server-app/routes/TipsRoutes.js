const express = require('express');
const {getTips, postTips, deleteTips, updateTips} = require('../controllers/tipsController')
const router = express.Router();

router.route("/").get(getTips).post(postTips)
router.route("/:id").delete(deleteTips).put(updateTips)

module.exports = router