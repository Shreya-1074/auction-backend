const { getServerTime } = require("../utils/time");

function createInitialItems() {
  const now = getServerTime();

  return [
    {
      id: "1",
      title: "MacBook Pro",
      startingPrice: 500,
      currentBid: 500,
      endsAt: now + 5 * 60 * 1000, // 5 minutes
      highestBidder: null,
      duration: 5 * 60 * 1000
    },
    {
      id: "2",
      title: "iPhone 15",
      startingPrice: 300,
      currentBid: 300,
      endsAt: now + 7 * 60 * 1000, // 7 minutes
      highestBidder: null,
      duration: 7 * 60 * 1000
    }
  ];
}

// In-memory auction items (acting as DB)
let items = createInitialItems();

function resetIfExpired(item) {
  const now = getServerTime();

  if (item.endsAt <= now) {
    // Reset auction
    item.currentBid = item.startingPrice;
    item.highestBidder = null;
    item.endsAt = now + item.duration;
  }

  return item;
}

function getAllItems() {
  // Auto-reset expired auctions before returning
  items = items.map(resetIfExpired);
  return items;
}

function getItemById(id) {
  const item = items.find(item => item.id === id);
  if (!item) return null;

  return resetIfExpired(item);
}

module.exports = {
  getAllItems,
  getItemById
};
