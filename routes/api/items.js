const express = require("express");
const router = express.Router();

// item model
const Item = require("../../models/Item");

//  @route GET api/items
// @desc Get all items
// @access Public
router.get("/");

module.exports = router;
