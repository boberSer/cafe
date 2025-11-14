<template>
  <article class="order-card">
    <h2>{{ orders.table }}</h2>
    <span>Работник закрепленный за столиком: {{ orders.shift_workers }}</span>
    <span>Время оформления заказа: {{ orders.create_at}}</span>
    <span>Статус выполнения заказа: {{ orders.status }}</span>
    <span>Стоимость заказа: {{ orders.price }}</span>
    <button @click="openModalOrder" class="approve_button">Управление</button>
    <modal-order-details
        @close-modal="closeModal"
        v-if="openedModal"
    />
  </article>

</template>

<script setup>
import ModalOrderDetails from "@/components/orders/ModalOrderDetails.vue";
import {ref} from "vue";

const props = defineProps({
  order: {type: Object, required: true}
})


const orders = ref([props.order]);

for(let i = 0; i < props.order.length; i++) {
  orders.value.push(props.order[i]);
}

const openedModal = ref(false)

const openModalOrder = async () => {
  openedModal.value = !openedModal.value
  console.log(1)
  document.body.style.overflowY = "hidden"

}

const closeModal = () => {
  openedModal.value = false
  document.body.style.overflowY = "auto"
}

</script>

<style scoped>

</style>