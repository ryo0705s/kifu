<script setup>
const state = reactive({
  params: {},
  isOpenModal: false,
  loginInfo: { mail: "", password: "" },
  user: { id: "", mail: "", password: "", total_donation_amounts: "" },
});
const router = useRouter();
const handleOpenModal = () => {
  state.isOpenModal = true;
};
const handleSignUp = async () => {
  let params = {
    email: state.loginInfo.mail,
    password1: state.loginInfo.password,
    password2: state.loginInfo.password,
  };
  const { data, error } = await useFetch(
    "http://127.0.0.1:8000/rest-auth/registration/",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: params,
    }
  );
  state.isOpenModal = false;
  state.loginInfo = {};
  // router.push("/");
};
const handleLogin = async () => {
  let params = {
    email: state.loginInfo?.mail,
    password: state.loginInfo?.password,
  };
  const { data, error } = await useFetch(
    "http://127.0.0.1:8000/rest-auth/login/",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: params,
    }
  );
  if (error) {
    console.log(error.value.name, "error");
    // todo: ここでshowErrorするとなぜかerro.vueの500エラーが出る。template内で出すとうまくいかないので
    // showError(error.value?.name);
    router.push("/");
    // throw createError(error.value);
    // throw new Error("エラーが発生しました");
  }
  if (data.value) {
    localStorage.setItem("token", data.value.token);
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/kifu");
    } else {
      router.push("/");
    }
  }
};
const handleClick = () => {
  setTimeout(
    (window.doLogin = function () {
      let options = {
        scope: "profile",
        pkce: true,
        response_type: "code",
        redirect_uri: "http://localhost:3000//handle_login.php",
        client_id:
          "amzn1.application-oa2-client.c4db0a0cfc104ecbb0afc2afc513f6c1",
      };
      state.params = options;
      amazon.Login.authorize(options, function (response) {
        console.log(response, "response");
        if (response.error) {
          alert("oauthエラー" + response.error);
          return;
        }
        amazon.Login.retrieveToken(response.code, function (response) {
          if (response.error) {
            alert("oauthエラー" + response.error);
            return;
          }
          amazon.Login.retrieveProfile(
            response.access_token,
            function (response) {
              alert("こんにちは。" + response.profile.Name);
              alert(
                "あなたのEメールアドレス：" + response.profile.PrimaryEmail
              );
              alert("あなたの一意のID：" + response.profile.CustomerId);
              if (window.console && window.console.log)
                window.console.log(response);
            }
          );
        });
      });
    }),
    2
  );
};
const handleLogout = () => {
  document.getElementById("Logout").onclick,
    function () {
      amazon.Login.logout();
    };
};
</script>
<style></style>
<template>
  <v-row align-content="center">
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
      <v-sheet width="300" class="mx-auto" v-if="state.isOpenModal"
        ><v-form>
          <v-text-field
            label="mail"
            v-model="state.loginInfo.mail"
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="state.loginInfo.password"
          ></v-text-field>
          <v-btn @click="handleSignUp">登録</v-btn>
          <v-btn @click="handleLogin">ログイン</v-btn>
        </v-form>
      </v-sheet>
      <v-btn @click="handleOpenModal">ログイン</v-btn>
      <v-btn @click="handleOpenModal">新規登録</v-btn>
      <v-btn><nuxt-link to="/kifu">登録せずに使用</nuxt-link></v-btn>

      <v-btn><nuxt-link to="/contact">問い合わせ</nuxt-link></v-btn>
    </v-col>
  </v-row>
</template>
