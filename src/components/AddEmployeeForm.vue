<template>
  <form :style="props.openedModals ? 'display: flex' : 'display: none'">
    <div>
      <h2>Добавление нового сотрудника</h2>
      <div>
        <label for="name">Имя</label>
        <input type="text" name="name" id="name">
      </div>
      <div>
        <label for="login">Логин</label>
        <input type="text" name="login" id="login">
      </div>
      <div>
        <label for="password">Пароль</label>
        <input type="password" name="password" id="password">
      </div>
      <div>
        <label for="photo_file" class="photo_input">Фото</label>
        <input type="file" name="photo" id="photo_file">
      </div>
      <div>
        <label for="role">Роль</label>
        <select name="role" id="role">
          <option value="nothing" selected disabled>Выберите роль:</option>
          <option value="1">Администратор</option>
          <option value="2">Официант</option>
          <option value="3">Повар</option>
        </select>
      </div>
      <div>
        <button class="approve_button">Отправить</button>
        <button class="cancel_button">Отмена</button>
      </div>
    </div>
  </form>
</template>

<script setup>

const props = defineProps({
  openedModals: {
    type: Boolean,
    required: true
  }
})

</script>

<style scoped>
form {
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 9;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

form > div {
  background: #005fb6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 10px;
}
</style>