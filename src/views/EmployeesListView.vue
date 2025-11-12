<template>
  <div>
    <section class="employees">
      <article>
        <span>Имя</span>
        <span>Статус</span>
        <span>Должность</span>
        <button @click="openModalAddEmployees()">+</button>
      </article>
      <employee-item
          v-for="(employee, index) in employees"
          :key="index"
          :employee="employee"
          @to-dismiss="toDismiss"
      />
    </section>
    <add-employee @auth-employees="authEmployees" @close-modal="closeModal" :openedModals="openedModal" />
  </div>
</template>

<script setup>
import EmployeeItem from "@/components/employees/EmployeeItem.vue";
import {onMounted, ref} from "vue";
import AddEmployee from "@/components/employees/AddEmployeeForm.vue";
import {BASE_URL} from "@/consts";

let employees = ref([])
let openedModal = ref(false)

const authEmployees = async (formData) => {
  try {
    const res = await fetch( BASE_URL + "user", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData
    })
    if(!res.ok) throw 'mistake';
    await getEmployees();
  } catch(e) {
    console.error(e)
  }
}

const getEmployees = async () => {
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
    employees.value = data
  } catch(e) {
    console.error(e)
  }
}

const toDismiss = async (params) => {
  try{
    const res = await fetch( BASE_URL + `user/${params}/to-dismiss`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
    if(!res.ok) throw 'mistake'
    const { data } = await res.json();
    employees.value[params - 1].status = data
  } catch(e) {
    console.error(e)
  }
}

onMounted(() => {
  getEmployees()
})

const openModalAddEmployees = () => {
  openedModal.value = !openedModal.value
  document.body.style.overflowY = "hidden"
}

const closeModal = () => {
  openedModal.value = false
  document.body.style.overflowY = "auto"
}

</script>

<style scoped>
.employees > article {
  display: flex;
  flex: 1;
  padding: 15px 75px;
  border-bottom: 1px solid #005fb6;
}

.employees > article:last-child {
  margin-bottom: 50px;
}

.employees > article:nth-child(2n) {
  background-color: rgba(75, 152, 224, 0.8);
  color: white;
}

.employees > article > span {
  font-size: 18pt;
  display: flex;
  align-self: center;
  flex: 1;
}

.employees > article:first-child {
  font-weight: bold;
}


.employees > article > button {
  border: 1px solid #005fb6;
  border-radius: 15px;
  padding: 10px 15px;
  font-size: 14pt;
  font-style: italic;
  font-weight: bold;
  color: #000;
  background: white;
  cursor: pointer;
  max-width: 200px;
}

.employees > article:nth-child(2n + 1) > button {
  border: 1px solid #005fb6;
  border-radius: 15px;
  padding: 10px 15px;
  font-size: 14pt;
  font-style: italic;
  font-weight: bold;
  color: white;
  background: #4B98E0E5;
  cursor: pointer;
}

.employees > article:first-child > button:last-child {
  background: rgba(108, 201, 15, 0.8);
  font-size: 28pt;
  font-style: normal;
  padding: 2px 55px;
}

</style>