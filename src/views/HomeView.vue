<template>
  <div class="home">
      Вечер в хату коллеги!
  </div>
</template>

<script setup>
import {useAuthStore} from "@/stores/store";
import {onMounted} from "vue";

const {checkPost} = useAuthStore();

onMounted(async () => {
  await checkPost()
})

</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-weight: bold;
}
</style>