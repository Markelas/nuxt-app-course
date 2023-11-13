<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="isShowNavDrawer"> <!--При нажатии на кнопку, левое меню скрывается-->
      <v-list subheader>
        <v-subheader>Пользователи в этой комнате:</v-subheader>

        <v-list-tile
          class="d-flex align-center"
          v-for="u in users"
          :key="u.id"
          @click.prevent
        >
          <v-list-tile-avatar>
            <v-img
              alt="User logo"
              :src="require('../assets/icons/user_logo.svg')"
            ></v-img>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{u.name}}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon color="grey">
              message
            </v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click="isShowNavDrawer = !isShowNavDrawer"></v-toolbar-side-icon>
      <v-btn icon @click="exit">
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-toolbar-title>Чат комнаты {{user.room}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div>
        <nuxt/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  data: () => ({
    isShowNavDrawer: true,
    users: [
      {id: 1, name: 'User 1'},
      {id: 2, name: 'User 2'}
    ]
  }),
  computed: mapState(['user']),
  methods: {
    ...mapMutations(['clearData']),
    exit() { //При нажатии на кнопку выйти
      this.$router.push('/?message=leftChat') //Выходим из чата
      this.clearData() //Очищаем данные пустым объектом user = {} в store
    }
  }
};
</script>

<style>
</style>
