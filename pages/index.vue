<template>
  <div>
    <h1>kifu</h1>
    <h2>このアプリは気軽に寄付ができるアプリです</h2>

    <ul>
      <li @click="state.getLogin">
        <Nuxt-link to="/login">ログイン</Nuxt-link>
      </li>
      <li @click="state.createAuth">新規登録</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup(_, root) {
    const state = reactive({});
    const getLogin = () => {
      console.log("login");
    };
    const createAuth = () => {
      console.log("createAuth");
    };
    return { state, getLogin, createAuth };
  },
});
</script>
