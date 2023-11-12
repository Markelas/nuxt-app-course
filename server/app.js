const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  console.log('IO Connected')

  socket.on('createMessage', data => { //Прослушка события createMessage, которое эмитим с клиента, получаем data
    setTimeout(() => {
      socket.emit('newMessage', { //В сокет эмитим событие newMessage, который есть в store
        text: data.text + ' Server'
      })
    }, 500)
  })

})

module.exports = {
  app,
  server
}
