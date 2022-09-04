<template>
  <div>
    <h2>IDを忘れた方はこちら</h2>
    <MailModal />
    <h2>パスワードを忘れた方はこちら</h2>
    <PasswordModal />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import MailModal from "~/components/MailModal.vue";
import PasswordModal from "~/components/PasswordModal.vue";
export default defineComponent({
  components: { MailModal, PasswordModal },
});
</script>
