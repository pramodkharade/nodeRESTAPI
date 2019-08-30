let io;
module.exports = {
    init: httpserver => {
        io = require('socket.io')(httpserver);
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialzed');
        }
        return io;
    }
};