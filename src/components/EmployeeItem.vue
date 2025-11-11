<template>
  <div class="employee-item">
    <article>
      <span>{{ props.employee.name }}</span>
      <span :class="props.employee.status === 'working' ? 'working' : 'fired' ">{{ props.employee.status === 'working' ? 'Работает' : 'Уволен'}}</span>
      <span>{{ props.employee.group }}</span>
      <button @click="openModalEmployee">Подробнее</button>
    </article>
    <modal-employee-details
        :employee="props.employee"
        @close-modal="closeModal"
        :openedModal="openedModal"
        @redact-employee="toDismiss"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";
import ModalEmployeeDetails from "@/components/ModalEmployeeDetails.vue";
import {BASE_URL} from "@/consts";

const props = defineProps({
  employee: {
    type: Object, required: true
  },
})

const emit = defineEmits(["to-dismiss"]);

let openedModal = ref(false)

const openModalEmployee = async () => {
  openedModal.value = !openedModal.value
  try {
    const res = await fetch(BASE_URL + `user/${props.employee.id}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      }
    })
    if(!res.ok) throw 'mistake'
    const { data } = await res.json()
  } catch(e) {
    console.error(e)
  }
  // document.body.style.overflowY = "hidden"
}

const toDismiss = (params) => {
  emit("to-dismiss", params)
}

const closeModal = () => {
  openedModal.value = false
  document.body.style.overflowY = "auto"
}

</script>

<style scoped>
.employee-item > article {
  display: flex;
  flex: 1;
  padding: 15px 75px;
  border-bottom: 1px solid #005fb6;
}

.employee-item:last-child > article {
  margin-bottom: 50px;
}

.employee-item:nth-child(2n) > article {
  background-color: rgba(75, 152, 224, 0.8);
  color: white;
}

.employee-item > article > span {
  font-size: 18pt;
  display: flex;
  align-self: center;
  flex: 1;
}

.employee-item:first-child > article {
  font-weight: bold;
}

.employee-item > article > button {
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

.employee-item:nth-child(2n + 1) > article > button {
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

.employee-item:first-child > article > button:last-child {
  background: rgba(108, 201, 15, 0.8);
  font-size: 28pt;
  font-style: normal;
  padding: 2px 55px;
}

.working {
  text-shadow: 0 0 5px #5bac10;
}

.fired {
  text-shadow: 0 0 5px #ad0d0d;
}
</style>