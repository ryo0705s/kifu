<style scoped>
.list-background {
  background: var(--cream);
}
</style>
<script>
import { defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const state = reactive({
      donation: 0,
    });
    const addDonation = async () => {
      const { data } = await useFetch("http://127.0.0.1:8000/api/create", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
        body: `title=hoge&description=fuga&donation_amount=0`,
      });
    };
    return {
      state,
      addDonation,
    };
  },
});
</script>
<template>
  <v-row align-content="center">
    <v-col align="center">
      <v-list class="list-background">
        <v-list-item>金額を入力</v-list-item>
        <v-list-item
          ><v-sheet width="300" class="list-background"
            ><v-text-field
              label="金額"
              type="number"
              v-model="state.donation"
            ></v-text-field>
            <div>~</div>
            <v-text-field
              label="金額"
              type="number"
              v-model="state.donation"
            ></v-text-field
          ></v-sheet>
          <div>の間</div>
        </v-list-item>
        <v-list-item
          ><v-btn @click="addDonation" color="yellow">この条件で寄付</v-btn>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
