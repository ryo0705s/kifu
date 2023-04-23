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
            ><v-text-field label="金額"></v-text-field>
            <div>~</div>
            <v-text-field label="金額"></v-text-field
          ></v-sheet>
          <div>の間</div>
        </v-list-item>
        <v-list-item>この条件で検索</v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<script>
export default {
  // const state = reactive({
  //   // ここにstateを定義する
  //   isRandom: false,
  //   return {
  //     state
  //     // ここにcomputedを定義する
  //   };
  // });
};
</script>
