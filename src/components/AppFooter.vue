<template>
  <footer>
    <article>
      &copy; Tortotoro - все права защищены
    </article>
    <article>
      8(888)777-44-11
    </article>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 10px;
  font-size: 18pt;
  background: #005fb6;
  margin: 0;
}

footer > article {
  color: #fff;
}

footer > article:last-child {
  font-size: 36pt;
  font-weight: bold;
}
</style>