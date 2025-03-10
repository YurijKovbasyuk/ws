const { Server } = require('socket.io')
const { createServer } = require('http')

const httpServer = createServer()

const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

io.on(('connection', (socket) => {
    // console.log('new frontend connect')
    socket.on('chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    })
}))

httpServer.listen(3001)