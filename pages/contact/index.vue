<style scoped>
.list-background {
  background: var(--cream);
}
</style>
<template>
  <v-row align-content="center">
    <v-col align="center"
      ><v-list class="list-background">
        <v-list-item>問い合わせ</v-list-item>
        <v-list-item><v-text-field label="mail"></v-text-field></v-list-item>
        <v-list-item
          ><v-text-field label="問い合わせ内容"></v-text-field
        ></v-list-item> </v-list
    ></v-col>
  </v-row>
  <v-row align-content="center">
    <v-col align="center"></v-col>
  </v-row>
</template>
