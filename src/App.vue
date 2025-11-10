<template>
  <div class="wrapper">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<style>

.approve_button {
  background: rgba(108, 201, 15, 0.8);
  border: none;
}

.cancel_button {
  background: #ad0d0d;
  border: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>