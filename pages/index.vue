<template>
  <!-- <div id="amazon-root"></div> -->
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
      <!-- <v-btn
        href="https://kifu.auth.ap-northeast-1.amazoncognito.com/login?client_id=68uc2o5qmlr7lmaph4sr2qj5f9&response_type=code&scope=aws.cognito.signin.user.admin+openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F"
        >ログイン</v-btn
      > -->
      <!-- <v-sheet width="300" class="mx-auto"
        ><v-form>
          <v-text-field label="mail"></v-text-field>
          <v-text-field label="password"></v-text-field> </v-form
      >
      </v-sheet> -->
      <!-- <v-btn> <nuxt-link to="/">login</nuxt-link> </v-btn> -->
      <!-- <a href id="LoginWithAmazon">
        <img
          border="0"
          alt="Login with Amazon"
          src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
          width="156"
          height="32"
          @click="handleClick()"
        />
      </a> -->
      <!-- <v-btn id="logout" @click="handleLogout()">logout</v-btn> -->
      <!-- <div>本アプリはamazonIDが必用になります</div> -->
      <v-btn><nuxt-link to="/contact">問い合わせ</nuxt-link></v-btn>
    </v-col>
  </v-row>
</template>
<script type="text/javascript">
// import { useRouter } from "nuxt";

export default {
  // mounted() {
  //   window.onAmazonLoginReady = function () {
  //     amazon.Login.setClientId(
  //       "amzn1.application-oa2-client.c4db0a0cfc104ecbb0afc2afc513f6c1"
  //     );
  //   };
  //   (function (d) {
  //     var a = d.createElement("script");
  //     a.type = "text/javascript";
  //     a.async = true;
  //     a.id = "amazon-login-sdk";
  //     a.src = "https://assets.loginwithamazon.com/sdk/na/login1.js";
  //     d.getElementById("amazon-root").appendChild(a);
  //   })(document);
  // },
  setup(_, { root }) {
    const state = reactive({
      // ここにstateを定義する
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
      // const { data } = await useFetch("http://127.0.0.1:8000/api/createUser", {
      //   method: "POST",
      //   mode: "no-cors",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      //   },
      //   body: `mail=${state.loginInfo.mail}&password=${state.loginInfo.password}&total_donation_amounts=0`,
      // });
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
      // console.log(data.value, "data", error, "error");
      if (error) {
        console.log(error.value.name, "error");
        showError(error.value.name);
        // throw createError(error.value);
        // throw new Error("エラーが発生しました");
      }
      if (data.value) {
        localStorage.setItem("token", data.value.token);
        const token = localStorage.getItem("token");
        if (token) {
          router.push("/kifu");
        }
      }

      // const { data } = await useFetch("http://127.0.0.1:8000/api/getUsers", {
      //   method: "GET",
      //   // mode: "no-cors",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      //   },
      //   params: params,
      // });
      // state.user = data.value[0];
      // console.log(data.value[0].id, "data");
    };
    const handleClick = () => {
      // let options = {};
      // options.scope = "profile";
      // console.log(options, "options");
      // options.scope_data = {
      //   profile: { essential: false },
      // };
      // amazon.Login.authorize(
      //   options,
      //   "http://localhost:3000//handle_login.php",
      //   function (response) {
      //     if (response.error) {
      //       alert("oauthエラー" + response.error);
      //       return;
      //     }
      //   }
      // );
      // return false;
      setTimeout(
        (window.doLogin = function () {
          let options = {
            scope: "profile",
            pkce: true,
            response_type: "code",
            redirect_uri: "http://localhost:3000//handle_login.php",
            client_id:
              "amzn1.application-oa2-client.c4db0a0cfc104ecbb0afc2afc513f6c1",
            // state: "123456789",
            // code_challenge: "123456789",
            // code_challenge_method: "S256",
          };
          state.params = options;
          amazon.Login.authorize(
            options,
            // "http://localhost:3000//handle_login.php"
            function (response) {
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
                      "あなたのEメールアドレス：" +
                        response.profile.PrimaryEmail
                    );
                    alert("あなたの一意のID：" + response.profile.CustomerId);
                    if (window.console && window.console.log)
                      window.console.log(response);
                  }
                );
              });
            }
          );
        }),
        2
      );
      // return false;
      // console.log(state.params, "state.params");
    };
    // };
    const handleLogout = () => {
      document.getElementById("Logout").onclick,
        function () {
          amazon.Login.logout();
        };
    };
    return {
      state,
      handleClick,
      handleLogout,
      handleOpenModal,
      handleSignUp,
      handleLogin,
    };
  },
};
</script>
<style></style>
