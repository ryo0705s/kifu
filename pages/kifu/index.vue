<style scoped>
.list-background {
  background: var(--cream);
}
</style>
<script setup>
const state = reactive({
  isDialog: false,
  isDonated: false,
});
const openModal = () => {
  state.isDialog = true;
};
const closeModal = () => {
  state.isDialog = false;
};
const handleRandomDonation = () => {
  state.isDonated = true;
};
</script>
<template>
  <v-row align-content="center">
    <v-col align="center">
      <v-list class="list-background">
        <v-list-item
          ><nuxt-link to="/kifu/create">金額を指定して寄付する</nuxt-link>
        </v-list-item>
        <v-list-item @click="openModal"
          ><span>ランダムに寄付をする</span>
        </v-list-item>
        <v-list-item
          ><nuxt-link to="/history">寄付履歴を見る</nuxt-link>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <template>
    <v-dialog v-model="state.isDialog" width="auto" class="center">
      <v-card
        v-if="!state.isDonated"
        class="max-auto"
        width="50rem"
        height="13rem"
      >
        <v-card-title class="mt-3 mb-3">ランダムに寄付</v-card-title>
        <v-card-text class="mt-3 mb-10"
          >ランダムに寄付しますがよろしいですか？</v-card-text
        >
        <template v-slot:actions>
          <v-btn
            class="ml-auto mr-auto"
            variant="elevated"
            color="yellow"
            @click="handleRandomDonation"
            >OK</v-btn
          >
        </template>
      </v-card>
      <v-card v-else class="max-auto" width="50rem" height="13rem">
        <v-card-title class="mt-3 mb-3">寄付の結果</v-card-title>
        <v-card-text class="mt-3 mb-10">〇〇円寄付しました</v-card-text>
        <template v-slot:actions>
          <v-btn
            class="ml-auto mr-auto"
            variant="elevated"
            color="yellow"
            @click="closeModal"
            >OK</v-btn
          >
        </template>
      </v-card>
    </v-dialog>
  </template>
</template>
