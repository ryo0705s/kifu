import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const customTheme = {
    colors: {
      black: "#514c4c",
      yellow: "#f8f377",
      cream: "#f9facb",
      gray: "#d9d9d9",
      white: "#ffffff",
    },
  };
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    // 他の設定をここに記述していく
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme,
      },
    },
  });
  // Vue.js で Vuetify を使用する
  nuxtApp.vueApp.use(vuetify);
});
