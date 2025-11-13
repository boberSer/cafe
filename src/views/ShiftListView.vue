<template>
  <div>
    <section class="shift">
      <button @click="openModalAddShifts" class="approve_button">Добавить смену</button>
      <shift-item
          v-for="(shift, index) in shifts"
          :key="index"
          :shift="shift"
          :users="users"
      />
    </section>
    <add-shift-form @add-shift="addShift" :opened-modals="openedModal" @close-modal="closeModal" />
  </div>
</template>

<script setup>
import AddShiftForm from "@/components/shifts/AddShiftForm.vue";
import ShiftItem from "@/components/shifts/ShiftItem.vue";
import {onMounted, ref} from "vue";
import {BASE_URL} from "@/consts";
import {api} from "@/stores/store";

let shifts = ref([])
let openedModal = ref(false)
const users = ref([])

const addShift = async (shift) => {
  try {
    const res = await fetch(BASE_URL + "work-shift", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        "start": shift.start.replace(/T/g, ' '),
        "end": shift.end.replace(/T/g, ' '),
      })
    });
    if(!res.ok) throw 'mistake'
    const data  = await res.json();
    shifts.value.push(data)
  } catch(e) {
    console.error(e)
  }
}

const getShifts = async () => {
  try {
    const res = await fetch(BASE_URL + "work-shift", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    if(!res.ok) throw 'mistake'
    const data = await res.json();
    shifts.value = data
  } catch(e) {
    console.error(e)
  }
}

const getUsers = async () => {
  try {
    try {
      const res = await fetch( BASE_URL + "user", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
      })
      if(!res.ok) throw 'mistake'
      const {data} = await res.json()
      users.value = data
    } catch(e) {
      console.error(e)
    }
    // const res = await api('user',)
    // const { data } = await res.json();
    // users.value = data
  } catch(e) {
    console.error(e)
  }
}

onMounted(() => {
  getUsers()
})

const openModalAddShifts = () => {
  openedModal.value = !openedModal.value
  // document.body.style.overflowY = "hidden"
}

const closeModal = () => {
  openedModal.value = false
  document.body.style.overflowY = "auto"
}

onMounted(() => {
  getShifts()
})

</script>

<style scoped>
.shift {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}

.shift > :first-child {
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

.shift > article {
  margin: 1rem;
  background: #4B98E0E5;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.shift > article > h2 {
  display: flex;
  justify-content: center;
  margin-bottom: .3rem;
  font-size: 2rem;
}

.shift > article > p {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.shift > article > button {
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  border: 1px solid #005fb6;
  border-radius: 5px;
  cursor: pointer;
}
</style>