<template>
  <header>
    <article>
      <img src="../assets/img/logo.png" alt="logo">
    </article>
    <nav>
      <router-link class="header-buttons" to="/employees">Сотрудники</router-link>
      <router-link class="header-buttons" to="/shifts">Смены</router-link>
      <router-link class="header-buttons" to="/orders">Заказы</router-link>
      <router-link to="/auth" class="header-buttons approve_button">Вход</router-link>
      <router-link to="/" class="header-buttons cancel_button">Выход</router-link>
    </nav>
  </header>
</template>

<script setup>

</script>

<style scoped>
header {
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 25px;
  border-bottom: 1px solid #005fb6;
}

header img {
  width: 250px;
  filter: drop-shadow(0 0 3px #005fb6);
}

header > nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 50px;
}

.header-buttons {
  border: 1px solid #005fb6;
  border-radius: 15px;
  padding: 15px 20px;
  font-size: 18pt;
  font-weight: bold;
  background: rgba(75, 152, 224, 0.8);
  filter: drop-shadow(0 0 2px #005fb6);
  min-width: 150px;
  display: flex;
  justify-content: center;
}
</style>