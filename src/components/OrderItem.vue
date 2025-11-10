<template>
  <article>
    <h2>Столик N{{ order.id }}</h2>
    <p>Официант: {{ order.personal }}</p>
    <p class="fired">Статус: {{ order.status === 1 ? 'Принят' : order.status === 2 ? 'Готов' : order.status === 3 ? 'Оплачен' : 'Отменен' }}</p>
    <p>Цена: {{ order.price }}</p>
    <button class="approve_button">Управление</button>
  </article>
</template>

<script setup>
defineProps({
  order: {type: Object, required: true},
})
</script>

<style scoped>

</style>