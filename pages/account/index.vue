<style scoped>
.list-background {
  background: var(--cream);
}
</style>
<script setup>
const state = reactive({
  isProfDialog: false,
  isPassDialog: false,
  loginInfo: { name: "", mail: "", newMail: "", password1: "", password2: "" },
});
const openProfModal = () => {
  state.isProfDialog = true;
};
const openPassModal = () => {
  state.isPassDialog = true;
};
</script>
<template>
  <v-row align-content="center">
    <v-col align="center">
      <v-list class="list-background">
        <v-list-item @click="openProfModal"
          ><span>プロフィールを変更する</span>
        </v-list-item>
        <v-list-item @click="openPassModal"
          ><span>パスワードを変更する</span>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <template>
    <v-dialog
      v-model="state.isProfDialog"
      max-width="500"
      max-height="auto"
      style="background-color: white"
    >
      <v-sheet class="bg-cream pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-text-field
            v-model="state.loginInfo.name"
            class="mb-2"
            label="Name"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="state.loginInfo.mail"
            class="mb-2"
            label="Mail"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="state.loginInfo.password1"
            label="Password"
            placeholder="Enter your password"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="state.loginInfo.password2"
            label="Password（確認用）"
            placeholder="Enter your password（確認用）"
            clearable
          ></v-text-field>
          <br />
          <v-btn
            color="yellow"
            size="large"
            type="submit"
            variant="elevated"
            block
            @click="handleSignUp"
          >
            変更する
          </v-btn>
        </v-card>
      </v-sheet>
    </v-dialog></template
  >
  <template>
    <v-dialog
      v-model="state.isPassDialog"
      max-width="500"
      max-height="auto"
      style="background-color: white"
    >
      <v-sheet class="bg-cream pa-12" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
          <v-text-field
            v-model="state.loginInfo.mail"
            class="mb-2"
            label="現在のメールアドレス"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="state.loginInfo.newMail"
            class="mb-2"
            label="新しいメールアドレス"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="state.loginInfo.password1"
            label="Password"
            placeholder="Enter your password"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="state.loginInfo.password2"
            label="Password（確認用）"
            placeholder="Enter your password（確認用）"
            clearable
          ></v-text-field>
          <br />
          <v-btn
            color="yellow"
            size="large"
            type="submit"
            variant="elevated"
            block
            @click="handleSignUp"
          >
            変更する
          </v-btn>
        </v-card>
      </v-sheet>
    </v-dialog></template
  >
</template>
