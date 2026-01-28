const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const setupSocket = require("./socket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

setupSocket(io);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
