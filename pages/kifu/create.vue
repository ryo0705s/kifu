<template>
  <v-row align-content="center">
    <v-col align="center">
      <v-list>
        <v-list-item>ランダム検索結果</v-list-item>
        <v-list-item>〇〇に〇〇円寄付しました</v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <v-row align-content="center">
    <v-col align="center">
      <v-list>
        <v-list-item>金額を入力</v-list-item>

        <v-list-item
          ><v-sheet width="300"
            ><v-text-field
              label="金額"
              type="number"
              v-model="state.donation"
            ></v-text-field>
            <div>~</div>
            <v-text-field label="金額"></v-text-field
          ></v-sheet>
          <div>の間</div>
        </v-list-item>
        <v-list-item
          ><v-btn @click="addDonation">この条件で検索</v-btn>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
import { defineComponent, reactive } from "@vue/composition-api";
export default defineComponent({
  setup() {
    const state = reactive({
      donation: 0,
    });
    const addDonation = async () => {
      const { data } = await useFetch("http://127.0.0.1:8000/api/1", {
        method: "POST",
        body: JSON.stringify({
          donation: state.donation,
        }),
      });
      console.log(state.donation, "donation");
    };
    return {
      state,
      addDonation,
    };
  },
});
</script>
