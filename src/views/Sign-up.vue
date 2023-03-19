<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>Create Your DailyDev Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <img
            alt="user logo"
            src="../assets/Icons/user-alt-light.svg"
            class="icon"
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <img
            alt="user logo"
            src="../assets/Icons/user-alt-light.svg"
            class="icon"
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <img
            alt="user logo"
            src="../assets/Icons/user-alt-light.svg"
            class="icon"
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <img
            alt="email logo"
            src="../assets/Icons/envelope-regular.svg"
            class="icon"
          />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <img
            alt="password logo"
            src="../assets/Icons/lock-alt-solid.svg"
            class="icon"
          />
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db from "../firebase/firebaseInit";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "sign-up",
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const auth = getAuth();
        const createUser = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const result = createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
