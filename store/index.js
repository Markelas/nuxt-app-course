export const state = () => ({

})
export const actions = {
    SOCKET_newMessage(context, data) { //Мы используем префикс SOCKET_
        console.log("Message received", data)
    }
}
