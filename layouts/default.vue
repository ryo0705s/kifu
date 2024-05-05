<template>
  <v-app>
    <v-app-bar color="yellow"
      ><v-app-bar-title><nuxt-link to="/">Kifu</nuxt-link></v-app-bar-title>
      <ul>
        <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/login">login</nuxt-link></li>
        <li><nuxt-link to="/kifu">kifu</nuxt-link></li>
        <li><nuxt-link to="/history">history</nuxt-link></li>
        <li><nuxt-link to="/contact">contact</nuxt-link></li>
        <li @click="handleLogout" class="clickable">logout</li>
      </ul></v-app-bar
    ><v-main style="height: 80%"
      ><v-container class="container"><slot /></v-container></v-main
    ><v-footer color="yellow">
      <v-row>
        <v-col><nuxt-link to="/"> home</nuxt-link></v-col>
        <v-col><nuxt-link to="/login">login</nuxt-link> </v-col>
        <v-col><nuxt-link to="/kifu">kifu</nuxt-link> </v-col>
        <v-col><nuxt-link to="/history">history</nuxt-link> </v-col>
        <v-col><nuxt-link to="/contact">contact</nuxt-link> </v-col>
      </v-row></v-footer
    >
  </v-app>
</template>
<script setup>
const router = useRouter();
const handleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  router.push("/");
};
</script>
<style scoped>
.v-application {
  background: var(--cream);
}
.container {
  padding-top: 10rem;
  margin-bottom: 10rem;
}
</style>
