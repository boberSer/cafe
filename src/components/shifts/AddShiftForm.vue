<template>
  <form @submit.prevent="onSubmit" class="form-modal" :style="openedModals ? 'display: flex' : 'display: none'">
    <div>
      <div class="nav">
        <h2>Добавление смены</h2>
        <img @click.prevent="closeModal" src="../../assets/icons/plus.svg" alt="plus">
      </div>
      <div>
        <label for="start">Начало</label>
        <label for="start">Начало смены не должно быть раньше, чем текущая дата</label>
        <input type="datetime-local" name="login" id="start" v-model="shift.start">
      </div>
      <div>
        <label for="end">Конец</label>
        <input type="datetime-local" name="password" id="end" v-model="shift.end">
      </div>
      <div>
        <button class="approve_button">Отправить</button>
        <button @click.prevent="closeModal" class="cancel_button">Отмена</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import {reactive} from "vue";

const emit = defineEmits(["close-modal", "add-shift"]);

defineProps({
  openedModals: {
    type: Boolean,
    required: true,
    readonly: false
  }
})

const shift = reactive({
  start: '',
  end: ''
})

const onSubmit = () => {
  emit("addShift", shift);
}

const closeModal = () => {
  emit('close-modal');
}
</script>

<style scoped>
input {
  align-self: center;
}

.nav {
  width: 100%;
}

.nav + div {
  display: flex;
  flex-direction: column;
}
</style>