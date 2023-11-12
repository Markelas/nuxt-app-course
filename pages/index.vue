<template>
  <v-layout column justify-center align-center>
    <v-flex xs10 sm8>
      <v-card
        min-width="450"
      >
        <v-card-title>
          <h2>Авторизация в чате</h2>
        </v-card-title>
        <v-card-text>
            <form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="16"
                label="Имя"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="room"
                :rules="roomErrors"
                label="Введите номер комнаты"
                required
                @input="$v.room.$touch()"
                @blur="$v.room.$touch()"
              ></v-text-field>

              <v-btn
                class="v-btn--large green"
                @click="submit"
              >
                Зайти в чат
              </v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  layout: 'empty',
  head: {
    title: 'Секретный чат' //Название вкладки
  },
  sockets: {
    connect() {
      console.log('Client IO connected')
    },
  },

  validations: {
    name: { required, maxLength: maxLength(16) },
    room: { required },
  },

  data: () => ({
    name: '',
    room: '',
  }),

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Имя не может быть более 16 символов')
      !this.$v.name.required && errors.push('Введите ваше имя. Поле не должно быть пустым.')
      return errors
    },
    roomErrors () {
      const errors = []
      if (!this.$v.room.$dirty) return errors
      !this.$v.room.required && errors.push('Комната должна быть введена')
      return errors
    },
  },

  methods: {
    ...mapMutations(['setUser']),
    submit () {
      this.$v.$touch()
      if (!(this.roomErrors.length && this.nameErrors.length)) { //Если ошибок нет
        const user = { // Формируем введенные данные пользователя и передаем в state
          name: this.name,
          room: this.room
        }
        this.setUser(user); //Передаем в мутацию Имя и номер комнаты, которые были введены
        this.$router.push("/chat") //Переход на страницу чата
      }
    },
  },
}
</script>
