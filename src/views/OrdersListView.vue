<template>
  <div>
    <section class="orders">
      <button @click="openModalAddOrders" class="approve_button">Принять заказ</button>
      <order-item
          v-for="(order, index) in orders"
          :key="index"
          :order="order"
      />
      <order-active-shift
          v-if="activeShift"
          :active-orders="activeOrders"
          :active-shift="activeShift"
          @change-order-status="changeOrderStatus"
          :opened-modal="openedModal"
      />
    </section>
    <add-order-form @add-order="addOrder" @close-modal="closeModal" :opened-modals="openedModal" />
  </div>
</template>

<script setup>
import OrderItem from "@/components/orders/OrderItem.vue";
import AddOrderForm from "@/components/orders/AddOrderForm.vue";
import {onMounted, ref} from "vue";
import {BASE_URL} from "@/consts";
import {api} from "@/stores/store";
import OrderActiveShift from "@/components/orders/OrderActiveShift.vue";
import {useAuthStore} from "@/stores/store";

const {login} = useAuthStore();

let orders = ref([])
let activeShift = ref([])
let activeOrders = ref([])

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
        work_shift_id: activeShift.value.id,
        table_id: order.table_id,
        number_of_person: order.number_of_person
      })
    })
    if(!res.ok) throw 'mistake'
    const {data} = await res.json()
    orders.value = data
  } catch(e) {
    console.error(e)
  }
}

const getActiveShift = async () => {
    try {
      const {data} = await api('work-shift/active/get')
      activeShift.value = data
      await getShiftOrders()
    } catch(e) {
      console.error(e)
    }
}

const getOrders = async () => {
  try {
    const {data} = await api('order/taken/get')
    orders.value = data
  } catch(e) {
    console.error(e)
  }
}

const getShiftOrders = async () => {
  try {
    const {data} = await api(`work-shift/${activeShift.value.id}/order`)
    for(let order of data.orders) {
      if(login.value === order.shift_workers) {
        activeOrders.value.push(order)
      }
    }
  } catch (e) {
    console.error(e)
  }
}

const changeOrderStatus = async (params, id) => {
  console.log(params)
  try {
    await api(`order/${id}/change-status`, {method: 'PATCH', body: JSON.stringify({"status": params})})
    await getShiftOrders()
  } catch(e) {
    console.error(e)
  }
}

onMounted(() => {
  getOrders()
  getActiveShift()
})

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
  grid-template-columns: repeat(3, 1fr);
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

.orders article {
  margin: 1rem;
  background: #4B98E0E5;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.orders article > h2 {
  display: flex;
  justify-content: center;
  margin-bottom: .3rem;
  font-size: 2rem;
}

.orders article > p {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.orders article > button {
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  border: 1px solid #005fb6;
  border-radius: 5px;
  cursor: pointer;
}
</style>