<template>
  <form @submit.prevent="onSubmit" class="form-modal">
    <div>
      <div class="nav">
        <h2>{{orders.table}}</h2>
        <img @click.prevent="closeModal" src="../../assets/icons/plus.svg" alt="plus">
      </div>
      <div>
        <article class="order-card">
          <span>Работник закрепленный за столиком: {{ orders.shift_workers }}</span>
          <span>Время оформления заказа: {{ formattedDate }}</span>
          <span>Статус выполнения заказа: {{ orders.status }}</span>
          <span>Стоимость заказа: {{ orders.price }}</span>
        </article>
        <label for="status">Изменение статуса</label>
        <select id="status" v-model="status">
          <option value="" disabled>Статус заказа</option>
          <option value="canceled">Отменен</option>
          <option value="paid-up">Оплачен</option>
        </select>
        <button>Изменить статус</button>
      </div>
    </div>
  </form>
</template>

<script setup>

import {computed, ref} from "vue";

const props = defineProps({
  orders: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  if (!props.orders?.create_at) return '';

  return props.orders.create_at.replace(/\.\d+Z/, '').replace(/T/g, ' ');
});

const status = ref('')

const emit = defineEmits(["close-modal", 'change-order-status']);

const onSubmit = () => {
  console.log(status.value, props.orders.id);
  emit('change-order-status', status.value, props.orders.id);
}

const closeModal = () => {
  emit("close-modal");
}

</script>


<style scoped>
.form-modal {
  display: flex;
}

.order-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 28px;
  font-weight: bold;
}
</style>