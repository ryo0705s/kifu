export const checkLoggedIn = () => {
  const state = reactive({ loggedIn: false });
  const user = useState("login-user");
  const loggedIn = useState<{ loggedIn: boolean }>("logged-in", () => {
    state.loggedIn = true;
    return { loggedIn: state.loggedIn };
  });

  if (!user.value) {
    return navigateTo("/login");
  }
};
export default defineNuxtRouteMiddleware((context) => {
  checkLoggedIn();
});
