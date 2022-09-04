<template>
  <div>
    <h2>
      <nuxt-link to="/login/:id/donate/number/">
        金額を指定して寄付する</nuxt-link
      >
      <NumberDonateModal />
    </h2>
    <h2>
      <nuxt-link to="/login/:id/donate/random/">ランダムに寄付する</nuxt-link>
    </h2>
    <RandomDonateModal />
    <span><Nuxt-link to="/">トップ</Nuxt-link></span>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import NumberDonateModal from "../../../components/NumberDonateModal.vue";
import RandomDonateModal from "../../../components/RandomDonateModal.vue";

export default defineComponent({
  components: { NumberDonateModal, RandomDonateModal },
});
</script>
