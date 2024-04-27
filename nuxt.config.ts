import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  vite: {
    // ssr: {
    //   noExternal: ["vuetify"],
    // },
    define: {
      "process.env.DEBUG": false,
    },
    // server: {
    //   proxy: {
    //     "/api/create/": {
    //       target: "http://127.0.0.1:8000",
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //     },
    //   },
    // },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "@/assets/css/_colors.scss" as *;',
    //     },
    //   },
    // },
  },
  css: [
    "@/assets/scss/_colors.scss",
    "@/assets/scss/_styles.scss",
    "@/assets/scss/main.scss",
  ],
});
