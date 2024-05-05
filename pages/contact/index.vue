<style scoped>
.list-background {
  background: var(--cream);
}
</style>
<template>
  <v-row align-content="center">
    <v-col align="center"
      ><v-list class="list-background" max-width="30rem">
        <v-list-item>問い合わせ</v-list-item>
        <v-list-item><v-text-field label="mail"></v-text-field></v-list-item>
        <v-list-item
          ><v-textarea
            label="問い合わせ内容"
            multi-line
          ></v-textarea></v-list-item
        ><v-btn color="yellow">送信</v-btn></v-list
      ></v-col
    >
  </v-row>
</template>
