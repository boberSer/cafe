<template>
  <form class="form-modal" :style="openedModal ? 'display: flex' : 'display: none'" @submit.prevent="onSubmit">
    <div>
      <div class="nav">
        <h2>Подробнее о смене N{{shift.id}}</h2>
        <img @click.prevent="closeModal" src="../../assets/icons/plus.svg" alt="plus">
      </div>
      <div class="refactor-shift">
        <div class="shift-card">
          <span class="das">Начало смены: {{ shift.start }}</span>
          <span class="das">Конец смены: {{ shift.end }}</span>
          <span class="das">Статус смены: {{ shift.active === 1 ? 'Открыта' : 'Закрыта' }}</span>
          <div>
            <button v-if="shift.active === 1" @click="closeShift(shift.id)">Закрыть смену</button>
            <button v-else @click="openShift(shift.id)">Открыть смену</button>
          </div>
        </div>
        <div class="shift-workers">
          <div v-if="activeShift.length <= 0">
            На смену никого не добавили
          </div>
          <div class="shift-worker" v-for="(user, index) in shift.users" :key="index">
            <span>Имя сотрудника: {{ user.name }}</span>
            <span>Должность: {{ user.group }}</span>
            <button @click="deleteFromShift(props.shift.id, user.id)">Снять с смены</button>
          </div>
          <div>
            <select v-model="selectedUserId" name="users" id="users">
              <option value="" disabled>Сотрудник</option>
              <option v-for="(user, index) in availableUsers" :key="index" :value="user.id" :style="user.status === 'fired' ? 'opacity: 0.5' : 'opacity: 1'">{{user.name}} {{user.group}}</option>
            </select>
            <button @click="addToShift(shift.id)">Добавить</button>
          </div>
        </div>
      </div>
      <div class="orders-list">
        <div class="order" v-for="order in shiftWithOrders?.orders">
          <h2>{{order.table}}</h2>
          <span>Официант на смене: {{order.shift_workers}}</span>
          <span>Дата оформления заказа: {{order.create_at}}</span>
          <span>Статус заказа: {{order.status}}</span>
          <span>Стоимость заказа: {{order.price}}</span>
        </div>
      </div>
      <span>Общая стоимость заказов за смену: {{shiftWithOrders.amount_for_all}}</span>
    </div>
  </form>
</template>

<script setup>

import {api} from "@/stores/store";
import {computed, ref} from "vue";

const props = defineProps({
  openedModal: {
    type: Boolean,
    required: true
  },
  shift: {
    type: Object,
    required: true
  },
  users: {
    type: Array,
    required: true
  },
  shiftWithOrders: {
    type: Array,
    required: true
  }
})

const selectedUserId = ref('')

const activeUsers = computed(() => {
  return props.users.filter(user => user.status !== 'fired')
})

const activeShift = computed(() => {
  if (!props.shift.users) return []
  return props.shift.users.filter(user => user.status !== 'fired')
})

const availableUsers = computed(() => {
  const shiftUserIds = activeShift.value.map(user => user.id)
  return activeUsers.value.filter(user => !shiftUserIds.includes(user.id))
})

const emit = defineEmits(["close-modal", "redact-shift"]);

const deleteFromShift = (shiftId, userId) => {
  try {
    api(`work-shift/${shiftId}/user/${userId}`, {shiftId, userId, method: 'DELETE'},)
    closeModal()
  } catch(e) {
    console.error(e)
  }
}

const addToShift = (shiftId) => {
  try {
    api(`work-shift/${shiftId}/user`, {method: 'POST', body: JSON.stringify({user_id: selectedUserId.value})})
    closeModal()
  } catch(e) {
    console.error(e)
  }
}

const openShift = async (id) => {
  try {
    await api(`work-shift/${id}/open`, {method: 'GET'})
  } catch(e) {
    console.error(e)
  }
}
const closeShift = async (id) => {
  try {
    await api(`work-shift/${id}/close`, {method: 'GET'})
  } catch(e) {
    console.error(e)
  }
}

const closeModal = () => {
  selectedUserId.value = ''
  emit('close-modal');
}


</script>

<style scoped>
.form-modal > div {
  gap: 4rem;
}

button {
  color: black;
}

.refactor-shift {
  display: flex;
  gap: 10px;
  align-self: flex-start;
}

.shift-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.disabled {
  opacity: 0.6;
}

.shift-worker {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
}
.shift-workers {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.das {
  display: flex;
  justify-content: space-between;
}

.orders-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.order {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  padding: 5px;
  color: black;
}

.order > h2 {
  color: black;
}
</style>