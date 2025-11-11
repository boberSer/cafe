<template>
  <form class="form-modal" :style="openedModal ? 'display: flex' : 'display: none'" @submit.prevent="onSubmit">
    <div>
      <div class="nav">
        <h2>Подробнее о сотруднике: {{props.employee.name}}</h2>
        <img @click.prevent="closeModal" src="@/assets/icons/plus.svg" alt="plus">
      </div>
      <div class="refactor-employee">
        <div class="employee-card">
          <span :class="props.employee.status === 'working' ? 'working' : 'fired' ">{{ props.employee.status === 'working' ? 'Работает' : 'Уволен'}} </span>
          <button :class="employee.status === 'fired' ? 'disabled' : ''" :disabled="employee.status === 'fired'">Уволить</button>
        </div>
        <div class="employee-card">
          <span>{{ props.employee.group }}</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  openedModal: {
    type: Boolean,
    required: true
  },
  employee: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(["close-modal", "redact-employee"]);

const onSubmit = () => {
  emit("redact-employee", props.employee.id);
  closeModal()
}

const closeModal = () => {
  emit('close-modal');
}

</script>

<style scoped>
.form-modal > div {
  height: 400px;
}

button {
  color: black;
}

.refactor-employee {
  display: flex;
}

.employee-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px;
}

.disabled {
  opacity: 0.6;
}

</style>