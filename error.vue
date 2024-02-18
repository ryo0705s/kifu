<template>
  <div>
    <h1>{{ errorHandler(error) }}</h1>
    <!-- <h1>{{ error?.message }}</h1>
    <h1>{{ error?.statusCode }}</h1>
    エラーページです -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
});
const router = useRouter();
// 以下の書き方だとエラーメッセージが出る前にページ遷移しちゃうので書き換えたい
const errorHandler = (error) => {
  switch (error.statusCode) {
    case 404:
      console.log("404");
      error.message = "存在しないページにアクセスしました";
      // showError("存在しないページにアクセスしました");
      break;
    case 401:
      error.message = "認証に失敗しました";
      // showError / "認証に失敗しました";
      break;
    case 403:
      error.message = "権限がありません";
      // showError("権限がありません");
      router.push("/");
      break;
    case 500:
      error.message = "サーバーエラーが発生しました";
      // showError("サーバーエラーが発生しました");
      break;
    default:
      error.message = "予期せぬエラーが発生しました";
      // showError("予期せぬエラーが発生しました");
      break;
  }
  // const mounted = () => {
  //   errorHandler(props.error);
  //   // console.log(this.error, "error");
  // };
  return error.message;
};
</script>
