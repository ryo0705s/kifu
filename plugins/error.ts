export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (err, context) => {
    console.log("vue based error handler", err, context);
  };
});
