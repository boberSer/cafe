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
      />
    </section>
    <add-employee :openedModals="openedModal" />
  </div>
</template>

<script setup>
import EmployeeItem from "@/components/EmployeeItem.vue";
import {computed, ref} from "vue";
import AddEmployee from "@/components/AddEmployeeForm.vue";

let employees = [
  {
    name: "Данек",
    status: "Уволен",
    post: "Администратор",
  },
  {
    name: "Ванек",
    status: "Работает",
    post: "Официант",
  },
  {
    name: "Ванек",
    status: "Уволен",
    post: "Повар",
  },
  {
    name: "Санек",
    status: "Работает",
    post: "Администратор",
  },
]

let openedModal = ref(false)

const openModalAddEmployees = () => {
  openedModal.value = !openedModal.value
  console.log(openedModal.value)
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