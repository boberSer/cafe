<template>
  <div>
    <section class="orders">
      <button @click="openModalAddOrders" class="approve_button">Принять заказ</button>
      <order-item
          v-for="(order, index) in orders"
          :key="index"
          :order="order"
      />
    </section>
    <add-order-form @add-order="addOrder" @close-modal="closeModal" :opened-modals="openedModal" />
  </div>
</template>

<script setup>
import OrderItem from "@/components/OrderItem.vue";
import AddOrderForm from "@/components/AddOrderForm.vue";
import {ref} from "vue";
import {BASE_URL} from "@/consts";

let orders = [
  {
    id: 1,
    personal: 'Данек',
    status: 1,
    price: 9990
  },
  {
    id: 2,
    personal: 'Ванек',
    status: 2,
    price: 9990
  },
  {
    id: 3,
    personal: 'Санек',
    status: 3,
    price: 9990
  },
]

// TODO not complete fetch api (finished response and

const addOrder = async (order) => {
  try{
    const res = await fetch(BASE_URL + "order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        work_shift_id: order.work_shift_id,
        table_id: order.table_id,
        number_of_person: order.number_of_person
      })
    })
    if(!res.ok) throw 'mistake'
    const {data} = await res.json()
    console.log(data)
  } catch(e) {
    console.error(e)
  }
}

let openedModal = ref(false)

const openModalAddOrders = () => {
  openedModal.value = !openedModal.value
  document.body.style.overflowY = "hidden"
}

const closeModal = () => {
  openedModal.value = false
  document.body.style.overflowY = "auto"
}

</script>

<style scoped>
.orders {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.orders > :first-child {
  position: fixed;
  right: 10rem;
  bottom: 100px;
  font-weight: bold;
  font-size: 1.3rem;
  color: #005fb6;
  padding: 25px;
  border: 1px solid #005fb6;
  border-radius: 5px;
  cursor: pointer;
}

.orders > article {
  margin: 1rem;
  background: #4B98E0E5;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.orders > article > h2 {
  display: flex;
  justify-content: center;
  margin-bottom: .3rem;
  font-size: 2rem;
}

.orders > article > p {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.orders > article > button {
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  border: 1px solid #005fb6;
  border-radius: 5px;
  cursor: pointer;
}
</style>