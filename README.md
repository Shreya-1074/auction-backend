
---

# 📄  BACKEND README 



```md
# 🏷️ Real-Time Auction Platform — Backend

Backend service for a real-time bidding / auction platform built with:

- Node.js
- Express
- Socket.io
- Docker

This server provides:

- REST API to fetch auction items
- WebSocket events for real-time bidding
- Race-condition safe bid handling
- Server-synchronized auction timers
- Auto-reset of expired auctions (for demo reliability)

---

## 🌐 Live API

Base URL:
https://auction-backend-1awd.onrender.com/

Test endpoint:
https://auction-backend-1awd.onrender.com/items

## 🧪 Race Condition Handling

If two users bid at the same time:

- The server processes bids **sequentially**
- Only the first valid bid is accepted
- The second bidder immediately receives a `BID_TOO_LOW` error

This guarantees **data consistency**.

---

## 📁 Project Structure

src/
routes/ # REST APIs
services/ # Business logic (bid validation, concurrency)
store/ # In-memory data store
socket/ # Socket.io events
utils/ # Time utilities

---

## 🧑‍💻 Run Locally (Without Docker)

```bash
npm install
npm start
Server runs at:

http://localhost:4000

🐳 Run using Docker
docker build -t auction-backend .
docker run -p 4000:4000 auction-backend

---

## 🧪 Concurrency Test Script (Race Condition Verification)

A test script is included to simulate **two clients bidding at the exact same time**:

test-race.js


This script:

- Opens two Socket.io clients simultaneously
- Sends two bids for the same item at the same time
- Verifies that:
  - Only one bid is accepted
  - The second bidder receives a `BID_TOO_LOW` error

---

### ▶️ How to Run the Test

Make sure the server is running locally or deployed, then run:

```bash
node test-race.js


You should see output similar to:
Sending two bids at same time...
Update: { itemId: '1', currentBid: 9999, highestBidder: 'user-A' }
User B error: BID_TOO_LOW


NOTE:
Open the site in two different browsers or incognito windows to test multi-user bidding.

Bids update instantly across all connected clients.

If two users bid at the same time, only one is accepted (handled by backend).  
