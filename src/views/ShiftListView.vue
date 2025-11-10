<template>
  <section class="shift">
    <button class="approve_button">Добавить смену</button>
    <article>
      <h2>Смена №5</h2>
      <p>Начало смены в 2021-09-19 08:00</p>
      <p>Конец смены в 2021-09-19 18:00</p>
      <p class="working">Статус: Открыта</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Смена №4</h2>
      <p>Начало смены в 2021-09-18 08:00</p>
      <p>Конец смены в 2021-09-18 18:00</p>
      <p class="fired">Статус: Закрыта</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Смена №3</h2>
      <p>Начало смены в 2021-09-17 08:00</p>
      <p>Конец смены в 2021-09-17 18:00</p>
      <p class="fired">Статус: Закрыта</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Смена №2</h2>
      <p>Начало смены в 2021-09-16 08:00</p>
      <p>Конец смены в 2021-09-16 18:00</p>
      <p class="fired">Статус: Закрыта</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Смена №1</h2>
      <p>Начало смены в 2021-09-15 08:00</p>
      <p>Конец смены в 2021-09-15 18:00</p>
      <p class="fired">Статус: Закрыта</p>
      <button class="approve_button">Управление</button>
    </article>
  </section>
</template>

<script setup>

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