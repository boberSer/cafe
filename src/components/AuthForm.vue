<template>
  <form>
    <h2>Авторизация</h2>
    <div>
      <label for="login_enter">Логин</label>
      <input type="text" name="login" id="login_enter">
    </div>
    <div>
      <label for="password_enter">Пароль</label>
      <input type="password" name="password" id="password_enter">
    </div>
    <div>
      <button class="approve_button">Отправить</button>
      <button class="cancel_button">Отмена</button>
    </div>
  </form>
</template>

<script setup>

import AddEmployee from "@/components/AddEmployeeForm.vue";
</script>


<style scoped>

</style>