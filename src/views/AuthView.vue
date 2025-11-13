<template>
  <article class="modal">
    <auth-form @login="login"/>
  </article>
</template>

<script setup>
import AuthForm from "@/components/AuthForm.vue";
import {BASE_URL} from "@/consts";
import {useRouter} from "vue-router";
import {useAuthStore} from "@/stores/store";

const { saveToken, saveLogin } = useAuthStore();

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
    saveLogin(loginData.login)
    saveToken(data.user_token)
    await router.push('/home')

  } catch (error) {
    console.error(error);
  }
}

</script>

<style scoped>

</style>