# 🏷️ Real-Time Auction Backend

Backend service for a real-time bidding / auction platform built with:

- Node.js
- Express
- Socket.io

This server provides:
- REST API to fetch auction items
- WebSocket events for real-time bidding
- Race-condition safe bid handling
- Server-synced auction timers
- Auto-reset of expired auctions (for demo reliability)

---

## 🌐 Live API

Base URL:
https://auction-backend-1awd.onrender.com

Test endpoint:
https://auction-backend-1awd.onrender.com/items

---

## 🚀 Features

- Real-time bidding using Socket.io
- Atomic bid validation (race-condition safe)
- Server-controlled countdown timers
- Auto-reset expired auctions so demo always works
- Clean modular architecture

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
----
## Run using Docker
docker build -t auction-backend .
docker run -p 4000:4000 auction-backend


---

# 💾 Commit & Push backend README

```bash
git add README.md
git commit -m "Add backend README"
git push

