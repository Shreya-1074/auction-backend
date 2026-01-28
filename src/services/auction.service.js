const { getItemById } = require("../store/auction.store");
const { getServerTime } = require("../utils/time");

// This function is ATOMIC (no await inside)
function placeBid({ itemId, userId, amount }) {
  const item = getItemById(itemId);

  if (!item) {
    throw new Error("ITEM_NOT_FOUND");
  }

  const now = getServerTime();

  if (now >= item.endsAt) {
    throw new Error("AUCTION_ENDED");
  }

  if (amount <= item.currentBid) {
    throw new Error("BID_TOO_LOW");
  }

  // ✅ Atomic update (no async gap here)
  item.currentBid = amount;
  item.highestBidder = userId;

  return {
    itemId: item.id,
    currentBid: item.currentBid,
    highestBidder: item.highestBidder
  };
}

module.exports = {
  placeBid
};
