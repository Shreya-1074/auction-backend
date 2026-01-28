const { placeBid } = require("../services/auction.service");

module.exports = function setupSocket(io) {
  console.log("Socket initialized");

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("BID_PLACED", (payload) => {
      try {
        const result = placeBid(payload);

        // Broadcast to everyone
        io.emit("UPDATE_BID", result);
      } catch (err) {
        socket.emit("BID_ERROR", {
          message: err.message
        });
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};
