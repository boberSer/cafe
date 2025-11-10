<template>
  <article>
    <span>{{ employee.name }}</span>
    <span :class="employee.status === 'Работает' ? 'working' : 'fired' ">{{ employee.status }}</span>
    <span>{{ employee.post }}</span>
    <button>Подробнее</button>
  </article>
</template>

<script setup>
defineProps({
  employee: {
    type: Object, required: true
  },
})

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

.working {
  text-shadow: 0 0 5px #5bac10;
}

.fired {
  text-shadow: 0 0 5px #ad0d0d;
}
</style>