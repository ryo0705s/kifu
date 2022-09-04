<template>
  <div>
    <v-col cols="12" sm="6" md="3">
      <v-text-field label="ID"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6" md="3">
      <v-text-field label="PASSWORD"></v-text-field>
    </v-col>
    <v-btn to="/login/:id?">login</v-btn>
    <span><Nuxt-link to="/">ID/Passwordを忘れた方はこちら</Nuxt-link></span>
    <span><Nuxt-link to="/">トップ</Nuxt-link></span>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const state = reactive({});
    return { state };
  },
});
</script>
