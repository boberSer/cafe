<template>
  <article>
    <h2>Смена N{{ shift.id }}</h2>
    <p>Начало смены в {{ shift.startData }}</p>
    <p>Конец смены в {{ shift.endDate }}</p>
    <p class="working">Статус: {{ shift.status === 1 ? 'Открыта' : 'Закрыта'  }}</p>
    <button class="approve_button">Управление</button>
  </article>
</template>

<script setup>
defineProps({
  shift: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>

</style>