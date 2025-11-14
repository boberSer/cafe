<template>
  <form @submit.prevent="onSubmit">
    <h2>Авторизация</h2>
    <div>
      <label for="login_enter">Логин</label>
      <input type="text" name="login" id="login_enter" v-model="loginData.login">
    </div>
    <div>
      <label for="password_enter">Пароль</label>
      <input type="password" name="password" id="password_enter" v-model="loginData.password">
    </div>
    <div>
      <button class="approve_button">Отправить</button>
      <button class="cancel_button">Отмена</button>
    </div>
  </form>
</template>

<script setup>
import {reactive} from "vue";

const emit = defineEmits(["login"]);

const loginData = reactive({
  login: '',
  password: ''
})

const onSubmit = () => {
  emit("login", loginData);
}

</script>


<style scoped>

</style>