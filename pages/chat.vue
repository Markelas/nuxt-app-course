<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.text">{{m.text}}</li>
    </ul>
  </div>
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
  computed: mapState(['user', 'messages']) //Берем свойства из store

}
</script>

<style scoped>

</style>
