export const useLoginUser = async (loginInfo: {
  mail: string;
  password: string;
}) => {
  interface User {
    pk: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  }
  interface LoginResponse {
    value: {
      user: User;
      token: string;
    };
  }
  const router = useRouter();
  const state = reactive({
    // loginInfo: { mail: "", password: "" },
    userInfo: { pk: 0, username: "", email: "", first_name: "", last_name: "" },
  });
  let params = {
    email: loginInfo?.mail,
    password: loginInfo?.password,
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
  if (data.value) state.userInfo = data.value.user;
  const loginUser = useState<{
    pk: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  }>("login-user", () => {
    console.log("retreiving user info ...");
    return state.userInfo;
  });
  if (error.value) {
    console.log(error.value?.name, "error");
    // todo: ここでshowErrorするとなぜかerro.vueの500エラーが出る。template内で出すとうまくいかないので
    // showError(error.value?.name);
    router.push("/");
    // throw createError(error.value);
    // throw new Error("エラーが発生しました");
  }
  if (data.value) {
    localStorage.setItem("token", data.value.token);
    const token = localStorage.getItem("token");
    const user = data.value.user;
    if (token) {
      router.push("/kifu");
    } else {
      router.push("/");
    }
  }
  return { state, loginUser };
};
