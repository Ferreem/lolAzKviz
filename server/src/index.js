const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const { setupSocket } = require('./socket');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Adjust this to match your client's URL
    methods: ["GET", "POST"]
  }
});

setupSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});