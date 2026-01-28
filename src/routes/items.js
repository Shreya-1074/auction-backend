const express = require("express");
const router = express.Router();

const { getAllItems } = require("../store/auction.store");
const { getServerTime } = require("../utils/time");

// GET /items
router.get("/", (req, res) => {
  const items = getAllItems();

  res.json({
    serverTime: getServerTime(),
    items
  });
});

module.exports = router;
