<script setup>

</script>

<template>
  <section class="orders">
    <button class="approve_button">Принять заказ</button>
    <article>
      <h2>Столик №1</h2>
      <p>Официант: John</p>
      <p class="fired">Статус: Отмена</p>
      <p>Цена: 9238</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Столик №2</h2>
      <p>Официант: John</p>
      <p class="working">Статус: Принят</p>
      <p>Цена: 238</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Столик №3</h2>
      <p>Официант: John</p>
      <p class="working">Статус: Готов</p>
      <p>Цена: 1436</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Столик №4</h2>
      <p>Официант: John</p>
      <p class="working">Статус: Оплачен</p>
      <p>Цена: 2316</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Столик №5</h2>
      <p>Официант: John</p>
      <p class="working">Статус: Оплачен</p>
      <p>Цена: 345345</p>
      <button class="approve_button">Управление</button>
    </article>
    <article>
      <h2>Столик №6</h2>
      <p>Официант: Mike</p>
      <p class="working">Статус: Оплачен</p>
      <p>Цена: 1212</p>
      <button class="approve_button">Управление</button>
    </article>
  </section>
</template>

<style scoped>
.orders {
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.orders > :first-child {
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

.orders > article {
  margin: 1rem;
  background: #4B98E0E5;
  padding: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.orders > article > h2 {
  display: flex;
  justify-content: center;
  margin-bottom: .3rem;
  font-size: 2rem;
}

.orders > article > p {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.orders > article > button {
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  border: 1px solid #005fb6;
  border-radius: 5px;
  cursor: pointer;
}
</style>