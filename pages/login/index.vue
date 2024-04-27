<script setup>
const state = reactive({
  params: {},
  isOpenModal: false,
  loginInfo: { mail: "", password: "" },
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
  let params = {
    email: state.loginInfo.mail,
    password1: state.loginInfo.password,
    password2: state.loginInfo.password,
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
};
const handleLogin = async () => {
  const user = await useLoginUser(state.loginInfo);
};
const handleRefresh = async () => {
  // const user = await useRefresh();
};
const handleCreateUser = async () => {
  const user = await useCreateUser(state.userInfo);
  console.log(user, "user");
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
.button {
  margin: 0 auto 10px;
}
</style>
<template>
  <v-dialog
    v-model="state.isOpenModal"
    max-width="500"
    max-height="auto"
    style="background-color: white"
  >
    <v-row align-content="center">
      <v-col align="center" class="container">
        <v-form>
          <v-text-field
            label="mail"
            v-model="state.loginInfo.mail"
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="state.loginInfo.password"
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="state.loginInfo.password"
          ></v-text-field>
          <v-btn @click="signUpOrLogin">{{ state.buttonName }}</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-dialog>
  <v-row align-content="center">
    <v-col align="center" class="container">
      <v-btn @click="openModal('login')" class="button">ログイン</v-btn>
      <v-btn @click="openModal('registration')" class="button">新規登録</v-btn>
      <span><nuxt-link to="/kifu">登録せずに使用</nuxt-link></span>
      <span><nuxt-link to="/contact">問い合わせ</nuxt-link></span>
    </v-col>
  </v-row>
</template>
