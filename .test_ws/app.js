const ws = new require('ws')

const wsServer = new ws.Server({ port: 5000 })

const socketList = []
wsServer.on('connection', (socket) => {
    socketList.push(socket)
    setTimeout(() => {
        socket.send('welcome to web-socket server')
    }, 3000);
    // console.log('new frontend connection')
    socketList.forEach(item => {
        if (item !== socket) {
            item.send('new member connect')
        }
    })
})