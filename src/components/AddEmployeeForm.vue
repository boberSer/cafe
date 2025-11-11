<template>
  <form @submit.prevent="authEmployee" class="form-modal" :style="openedModals ? 'display: flex' : 'display: none'">
    <div>
      <div class="nav">
        <h2>Добавление нового сотрудника</h2>
        <img src="@/assets/icons/plus.svg" alt="plus" @click.prevent="closeModal">
      </div>
      <div>
        <label for="name">Имя</label>
        <input type="text" name="name" id="name" v-model="employee.name">
      </div>
      <div>
        <label for="login">Логин</label>
        <input type="text" name="login" id="login" v-model="employee.login">
      </div>
      <div>
        <label for="password">Пароль</label>
        <input type="password" name="password" id="password" v-model="employee.password">
      </div>
      <div>
        <label for="photo_file" class="photo_input">Фото</label>
        <input @change="handleFileChange" type="file" name="photo" id="photo_file">
      </div>
      <div>
        <label for="role">Роль</label>
        <select name="role" id="role" v-model="employee.role_id">
          <option value="nothing" selected disabled>Выберите роль:</option>
          <option value="1">Администратор</option>
          <option value="2">Официант</option>
          <option value="3">Повар</option>
        </select>
      </div>
      <div>
        <button class="approve_button">Отправить</button>
        <button @click.prevent="closeModal" class="cancel_button">Отмена</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import {reactive, ref} from "vue";
const emit = defineEmits(["close-modal", "auth-employees"]);

defineProps({
  openedModals: {
    type: Boolean,
    required: true
  }
})

let photoFile = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0];

  photoFile.value = file;

  employee.photo_file = file;
}

let employee = reactive({
  name: '',
  login: '',
  password: '',
  photo_file: null,
  role_id: ''
})

const authEmployee = () => {
  const formData = new FormData();
  formData.append('name', employee.name);
  formData.append('login', employee.login);
  formData.append('password', employee.password);
  formData.append('role_id', employee.role_id);
  if (employee.photo_file) {
    formData.append('photo_file', employee.photo_file);
  }
  emit('auth-employees', formData);
  closeModal();
}

const closeModal = () => {
  emit('close-modal');
}

</script>

<style scoped>
.form-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
}
</style>