<template>
  <div id="amazon-root"></div>
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
      <!-- <v-sheet width="300" class="mx-auto"
        ><v-form>
          <v-text-field label="mail"></v-text-field>
          <v-text-field label="password"></v-text-field> </v-form
      >
      </v-sheet> -->
      <!-- <v-btn> <nuxt-link to="/">login</nuxt-link> </v-btn> -->
      <a href id="LoginWithAmazon">
        <img
          border="0"
          alt="Login with Amazon"
          src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
          width="156"
          height="32"
          @click="handleClick()"
        />
      </a>
      <v-btn id="logout" @click="handleLogout()">logout</v-btn>
      <div>本アプリはamazonIDが必用になります</div>
      <v-btn><nuxt-link to="/contact">問い合わせ</nuxt-link> </v-btn>
    </v-col>
  </v-row>
</template>
<script type="text/javascript">
export default {
  mounted() {
    window.onAmazonLoginReady = function () {
      amazon.Login.setClientId(
        "amzn1.application-oa2-client.c4db0a0cfc104ecbb0afc2afc513f6c1"
      );
    };
    (function (d) {
      var a = d.createElement("script");
      a.type = "text/javascript";
      a.async = true;
      a.id = "amazon-login-sdk";
      a.src = "https://assets.loginwithamazon.com/sdk/na/login1.js";
      d.getElementById("amazon-root").appendChild(a);
    })(document);
  },
  setup() {
    const state = reactive({
      // ここにstateを定義する
      params: {},
    });
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
    };
  },
};
</script>
<style></style>
