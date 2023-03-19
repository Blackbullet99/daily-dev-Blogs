<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img
              alt="email logo"
              src="../assets/Icons/envelope-regular.svg"
              class="icon"
            />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "forgot-password",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  components: {
    Modal,
    Loading,
  },
  methods: {
    resetPassword() {
      this.loading = true;
        const auth = getAuth();
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            this.loading = false;
            this.modalMessage = "Password reset email sent";
            this.modalActive = !this.modalActive;
          })
          .catch((error) => {
            this.loading = false;
            this.modalMessage = error.message;
            this.modalActive = !this.modalActive;
          });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
