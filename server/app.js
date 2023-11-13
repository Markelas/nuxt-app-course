const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const mes =  (name, text, id) => ({name, text, id})

io.on('connection', socket => {

  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) { //Если введенных данных нет
      return callback('Введенные данные некорректны') //Выдаем ошибку
    }

    callback({userId: socket.id}) //Иначе передаем объект на фронтенд
    socket.emit('newMessage', mes('admin', `Добро пожаловать ${data.name}`))
  })
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
