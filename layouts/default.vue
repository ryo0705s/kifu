<template>
  <v-app>
    <v-card>
      <v-app-bar color="primary"
        ><v-app-bar-title>kifu</v-app-bar-title>
        <ul>
          <li><nuxt-link to="/">home</nuxt-link></li>
          <li><nuxt-link to="/">login</nuxt-link></li>
          <li><nuxt-link to="/kifu">kifu</nuxt-link></li>
          <li><nuxt-link to="/history">history</nuxt-link></li>
          <li><nuxt-link to="/contact">contact</nuxt-link></li>
          <li @click="handleLogout">logout</li>
        </ul></v-app-bar
      >
      <!-- <v-navigation-drawer>
        <v-list>
          <v-list-item title="Navigation drawer"></v-list-item>
        </v-list>
      </v-navigation-drawer> -->
      <v-main style="min-height: 100vh" w-100
        ><v-container><slot /></v-container> </v-main
      ><v-footer color="primary">
        <v-row>
          <v-col><nuxt-link to="/"> home</nuxt-link></v-col>
          <v-col><nuxt-link to="/">login</nuxt-link> </v-col>
          <v-col><nuxt-link to="/kifu">kifu</nuxt-link> </v-col>
          <v-col><nuxt-link to="/history">history</nuxt-link> </v-col>
          <v-col><nuxt-link to="/contact">contact</nuxt-link> </v-col>
        </v-row></v-footer
      >
    </v-card>
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
<style></style>
