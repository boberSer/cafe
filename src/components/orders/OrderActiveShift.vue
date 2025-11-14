<template>
  <article>
    <div>
      <h2>Активная смена: {{ activeShift.id }}</h2>
      <span>Начало смены: {{ activeShift.start }}</span>
      <span>Конец смены: {{ activeShift.end }}</span>
    </div>
  </article>
  <article class="order-card" v-for="order in activeOrders" :key="order.id">
    <h2>{{ order.table }}</h2>
    <span>Работник закрепленный за столиком: {{ order.shift_workers }}</span>
    <span>Время оформления заказа: {{ order.create_at.replace(/\.\d+Z/,'').replace(/T/g, ' ')}}</span>
    <span>Статус выполнения заказа: {{ order.status }}</span>
    <span>Стоимость заказа: {{ order.price }}</span>
    <button @click="openOrderModal(order.id)">Управление</button>
    <modal-order-details
        :orders="orders"
        @close-modal="closeModal"
        v-if="openedModal"
        @change-order-status="closeModal"
    />
  </article>
</template>

<script setup>
import {ref} from "vue";
import ModalOrderDetails from "@/components/orders/ModalOrderDetails.vue";
import {api} from "@/stores/store";

defineProps({
  activeShift: {
    type: Object,
    required: true
  },
  activeOrders: {
    type: Object,
    required: true
  },
  openedModal: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['change-order-status'])

const openedModal = ref(false)
const orders = ref([])

const openOrderModal = async (id) => {
  openedModal.value = !openedModal.value

  try {
    const {data} = await api(`order/${id}`)
    orders.value = data
  } catch(e) {
    console.error(e)
  }

}

const closeModal = (params, id) => {
  emit('change-order-status', params, id)
  openedModal.value = false
}

</script>

<style scoped>
article > div {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 24px;
}

span, div {
  text-decoration: underline;
}

article {
  margin: 1rem;
  background: #4B98E0E5;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.order-card {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

</style>