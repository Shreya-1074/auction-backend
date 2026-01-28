const { io } = require("socket.io-client");

const socket1 = io("http://localhost:4000");
const socket2 = io("http://localhost:4000");

const ITEM_ID = "1";

function bid(socket, userId) {
  socket.emit("BID_PLACED", {
    itemId: ITEM_ID,
    userId,
    amount: 9999  // both try same amount
  });
}

setTimeout(() => {
  console.log("Sending two bids at same time...");

  bid(socket1, "user-A");
  bid(socket2, "user-B");
}, 1000);

socket1.on("BID_ERROR", (e) => console.log("User A error:", e.message));
socket2.on("BID_ERROR", (e) => console.log("User B error:", e.message));

socket1.on("UPDATE_BID", (u) => console.log("Update:", u));
