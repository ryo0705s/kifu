export const useLoggedIn = () => {
  const isLoggedIn: Ref<boolean> = useState("logged-in", () => false);
  const updateLoggedIn = (isLoggedIn: Ref<boolean>) => {
    isLoggedIn.value = true;
  };
  return {
    isLoggedIn: readonly(isLoggedIn),
    updateLoggedIn: updateLoggedIn(isLoggedIn),
  };
};
