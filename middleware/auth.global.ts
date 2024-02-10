export default defineNuxtRouteMiddleware(async (to) => {
  const isRedirect = await checkLoggedIn();
  if (isRedirect === true && to.path !== "/login") {
    return navigateTo("/login");
  }
});
