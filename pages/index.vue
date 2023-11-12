<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <v-btn @click="message">
          New message
      </v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {  },
  sockets: {
    connect(){
      console.log('Client IO connected')
    }
  },
  methods: {
    message() {
      this.$socket.emit('createMessage', { //Эмитим событие через сокет, чтобы слушать эмит события, нужно поставить прослушку на сервере
        text: 'From client'
      })
    }
  }
};
</script>
