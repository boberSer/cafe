<template>
  <form class="form-modal" @submit.prevent="onSubmit" :style="openedModals ? 'display: flex' : 'display: none'">
    <div>
      <div class="nav">
        <h2>Добавление заказа</h2>
        <img src="../../assets/icons/plus.svg" alt="plus" @click="closeModal">
      </div>
      <div>
        <label for="table_id">Номер столика</label>
        <input type="number" name="password" id="table_id" v-model="order.table_id">
      </div>
      <div>
        <label for="number_of_person">Количество персон</label>
        <input type="number" name="password" id="number_of_person" v-model="order.number_of_person">
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

const emit = defineEmits(["close-modal", "add-order"]);

defineProps({
  openedModals: {
    type: Boolean,
    required: true,
    readonly: false
  }
})

const order = reactive({
  word_shift_id: '',
  table_id: '',
  number_of_person: ''
})

const onSubmit = () => {
  emit("add-order", order);
}

const closeModal = () => {
  emit('close-modal');
}
</script>

<style scoped>

</style>