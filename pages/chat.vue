<template>
  <h2>Chat {{user.name}}</h2>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "chat",
  middleware: ['chat'],
  head() { //Выводим название комнаты во вкладке
    return{
      title: `Комната ${this.user.room}`
    }
  },
  computed: mapState(['user'])

}
</script>

<style scoped>

</style>
