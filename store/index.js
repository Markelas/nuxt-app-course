export const state = () => ({
  user: {} //По умолчанию, user это пустой объект
})

export const mutations = {
  setUser(state, user) { //Используем мутацию, для передачи в state пользователя, которого мы ввели в окне формы
    state.user = user
  }
}
export const actions = {
    SOCKET_newMessage(context, data) { //Мы используем префикс SOCKET_
        console.log("Message received", data)
    }
}
