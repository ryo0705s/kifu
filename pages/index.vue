<template>
  <div>
    <h1>kifu</h1>
    <h2>このアプリは気軽に寄付ができるアプリです</h2>
    <LoginPage />
    <NewAcountPage />
    <ul>
      <li @click="state.login"><Nuxt-link to="/login">ログイン</Nuxt-link></li>
      <li @click="state.createAuth">新規登録</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import LoginPage from "~/components/LoginPage.vue";
import NewAcountPage from "~/components/NewAcountPage.vue";
export default defineComponent({
  components: { LoginPage, NewAcountPage },
  setup(_, root) {
    const state = reactive({});
    const login = () => {};
    const createAuth = () => {};
    return state, login, createAuth;
  },
});
</script>
