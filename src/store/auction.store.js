const { getServerTime } = require("../utils/time");

// In-memory auction items (acting as DB)
let items = [
  {
    id: "1",
    title: "MacBook Pro",
    startingPrice: 500,
    currentBid: 500,
    endsAt: getServerTime() + 5 * 60 * 1000, // 5 minutes from server start
    highestBidder: null
  },
  {
    id: "2",
    title: "iPhone 15",
    startingPrice: 300,
    currentBid: 300,
    endsAt: getServerTime() + 7 * 60 * 1000,
    highestBidder: null
  }
];

function getAllItems() {
  return items;
}

function getItemById(id) {
  return items.find(item => item.id === id);
}

module.exports = {
  getAllItems,
  getItemById
};
