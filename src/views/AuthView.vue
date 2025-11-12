<template>
  <article class="modal">
    <auth-form @login="login"/>
    <add-shift-form/>
    <add-order-form/>
  </article>
</template>

<script setup>
import AuthForm from "@/components/AuthForm.vue";
import AddShiftForm from "@/components/shifts/AddShiftForm.vue";
import AddOrderForm from "@/components/AddOrderForm.vue";
import {BASE_URL} from "@/consts";
import {useRouter} from "vue-router";

const router = useRouter();

// TODO change style and refactor fetch api -> mistake in JSON.stringify()

const login = async (loginData) => {
  try {
    const res = await fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if(!res.ok) throw 'mistake'

    const { data } = await res.json()
    localStorage.setItem('token', data.user_token)
    await router.push('/home')

  } catch (error) {
    console.error(error);
  }
}

</script>

<style scoped>

</style>