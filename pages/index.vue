<template>
  <v-row align-content="ceneter">
    <v-col align="center">
      <v-list>
        <v-list-item>このアプリは気軽に寄付ができるアプリです。</v-list-item>
        <v-list-item
          >Amazonアカウントがあれば誰でも今すぐ始められます</v-list-item
        >
        <v-list-item>
          金額を指定して、全国の児童施設やこども食堂などに寄付してみましょう</v-list-item
        >
      </v-list>
    </v-col>
  </v-row>
  <v-row>
    <v-col align="center">
      <!-- <v-sheet width="300" class="mx-auto"
        ><v-form>
          <v-text-field label="mail"></v-text-field>
          <v-text-field label="password"></v-text-field> </v-form
      >
      </v-sheet> -->
      <v-btn> <nuxt-link to="/">login</nuxt-link> </v-btn>
      <div>本アプリはamazonIDが必用になります</div>
      <v-btn><nuxt-link to="/contact">問い合わせ</nuxt-link> </v-btn>
    </v-col>
  </v-row>
</template>
<script setup lang="ts"></script>
<style></style>
