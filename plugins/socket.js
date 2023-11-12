import Vue from 'vue'
import VueSocketIO from "vue-socket.io";
 //ПЛАГИН РЕГИСТРИРУЕМ В NUXT CONFIG
export default function ({store}) { //Мы будем создавать плагин, как функцию, после того, как nuxt соберет из наших констант
    Vue.use(new VueSocketIO({
        debug: false,
        connection: 'http://localhost:3000',
        vuex: {
            store,
            actionPrefix: 'SOCKET_', //Для actions и mutation мы будем использовать SOCKET_, чтобы брать события с сервера
            mutationPrefix: 'SOCKET_'
        },
    }))
}
