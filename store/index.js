export const state = () => ({
  user: {}, //По умолчанию, user это пустой объект
  messages: []
})

export const mutations = {
  setUser(state, user) { //Используем мутацию, для передачи в state пользователя, которого мы ввели в окне формы
    state.user = user
  },
  clearData(state) {
    state.user = {}
    state.messages = []
  },
  SOCKET_newMessage(state, message) { //Данная мутация будет вызвана автоматически пакетом
    state.messages.push(message) //Добавляем сообщение в массив
  }
}
