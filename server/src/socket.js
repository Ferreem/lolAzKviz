function setupSocket(io) {
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      // Handle game events here
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  }
  
  module.exports = { setupSocket };