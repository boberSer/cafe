<template>
  <form class="form-modal" :style="openedModal ? 'display: flex' : 'display: none'" @submit.prevent="onSubmit">
    <div>
      <div class="nav">
        <h2>Подробнее о смене N{{props.shift.id}}</h2>
        <img @click.prevent="closeModal" src="../../assets/icons/plus.svg" alt="plus">
      </div>
      <div class="refactor-shift">
        <div class="shift-card">
          <span class="das">Начало смены: {{ props.shift.start }}</span>
          <span class="das">Конец смены: {{ props.shift.end }}</span>
          <span class="das">Статус смены: {{ props.shift.active === 1 ? 'Открыта' : 'Закрыта' }}</span>
        </div>
        <div class="shift-workers">
          <div class="shift-worker" v-for="(user, index) in props.shift.users" :key="index">
            <span>Имя сотрудника: {{ user.name }}</span>
            <span>Должность: {{ user.group }}</span>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import EmployeeItem from "@/components/employees/EmployeeItem.vue";

const props = defineProps({
  openedModal: {
    type: Boolean,
    required: true
  },
  shift: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(["close-modal", "redact-shift"]);

const closeModal = () => {
  emit('close-modal');
}

</script>

<style scoped>
.form-modal > div {
  height: 400px;
  justify-content: space-between;
}

button {
  color: black;
}

.refactor-shift {
  display: flex;
  gap: 10px;
  align-self: center;
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
</style>