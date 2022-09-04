<template>
  <div>
    <h2 @click="state.donateByNumber">
      <nuxt-link to="/login/:id/donate/number/">
        金額を指定して寄付する</nuxt-link
      >
      <NumberDonateModal v-model="state.money" />
    </h2>
    <h2 @click="state.donateByRandom">
      <nuxt-link to="/login/:id/donate/random/">ランダムに寄付する</nuxt-link>
    </h2>
    <RandomDonateModal v-model="state.money" />
    <span><Nuxt-link to="/">トップ</Nuxt-link></span>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
import NumberDonateModal from "../../../components/NumberDonateModal.vue";
import RandomDonateModal from "../../../components/RandomDonateModal.vue";

export default defineComponent({
  components: { NumberDonateModal, RandomDonateModal },
  setup(_, root) {
    const state = reactive({
      money: { start: "", end: "" },
    });
    const donateByNumber = () => {};
    const donateByRandom = () => {};
    return { state, donateByNumber, donateByRandom };
  },
});
</script>
