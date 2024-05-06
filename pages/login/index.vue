<script setup>
const state = reactive({
  params: {},
  isOpenModal: false,
  loginInfo: { mail: "", password1: "", password2: "" },
  user: { id: "", mail: "", password: "", total_donation_amounts: "" },
  buttonName: "",
});
const router = useRouter();
const openModal = (action) => {
  state.isOpenModal = true;
  if (action === "login") {
    state.buttonName = "ログイン";
  } else if (action === "registration") {
    state.buttonName = "登録する";
  }
};
// 'EmailAddressManager' object has no attribute 'is_verified'が直せない
// all-authとrest-authのバージョン違いの可能性もあるが、挙げると別のエラーが出る
// ログインがrest-frameworkで登録がrest-authなのが悪いかも?
const handleSignUp = async () => {
  if (
    (state.loginInfo.password1.length > 0) &
    (state.loginInfo.password2.length > 0) &
    (state.loginInfo.password1 === state.loginInfo.password2)
  ) {
    let params = {
      email: state.loginInfo.mail,
      password: state.loginInfo.password1,
    };
    const { data, error } = await useFetch(
      "http://127.0.0.1:8000/api/auth/registration/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(params),
      }
    );
    state.isOpenModal = false;
    state.loginInfo = {};
    if (data.value) {
      state.user = data.value;
      router.push("/");
    }
    if (error.value) {
      router.push("/login");
    }
  } else {
    console.log("error");
  }
};
const handleLogin = async () => {
  if (
    (state.loginInfo.password1.length > 0) &
    (state.loginInfo.password2.length > 0) &
    (state.loginInfo.password1 === state.loginInfo.password2)
  ) {
    let loginInfo = {
      mail: state.loginInfo.mail,
      password: state.loginInfo.password1,
    };
    const user = await useLoginUser(loginInfo);
  } else {
    console.log("パスワードを見直してみ");
  }
};
const handleRefresh = async () => {
  // const user = await useRefresh();
};
const handleCreateUser = async () => {
  const user = await useCreateUser(state.loginInfo);
};

const handleLogout = () => {
  document.getElementById("Logout").onclick,
    function () {
      amazon.Login.logout();
    };
};
const signUpOrLogin = () => {
  switch (state.buttonName) {
    case "ログイン":
      return handleLogin();
    case "登録する":
      return handleSignUp();
  }
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
}
.container > * {
  margin-bottom: 10px;
}
</style>
<template>
  <v-dialog
    v-model="state.isOpenModal"
    max-width="500"
    max-height="auto"
    style="background-color: white"
  >
    <v-sheet class="bg-cream pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
        <v-text-field
          v-model="state.loginInfo.mail"
          class="mb-2"
          label="Email"
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
          新規登録
        </v-btn>
      </v-card>
    </v-sheet>
  </v-dialog>
  <v-sheet class="bg-cream pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-text-field
        v-model="state.loginInfo.mail"
        class="mb-2"
        label="Email"
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
        @click="handleLogin"
      >
        ログイン
      </v-btn>
    </v-card>
  </v-sheet>
  <v-row align-content="center">
    <v-col align="center" class="container">
      <span @click="openModal('registration')" class="clickable">新規登録</span>
      <span><nuxt-link to="/kifu">登録せずに使用</nuxt-link></span>
      <span><nuxt-link to="/contact">問い合わせ</nuxt-link></span>
    </v-col>
  </v-row>
</template>
