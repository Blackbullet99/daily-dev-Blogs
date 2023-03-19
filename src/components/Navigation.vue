<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">
          <img
            alt="Home logo"
            src="../assets/Icons/logo.svg"
            class="home-logo"
          />
          DailydevBlogs
        </router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!showMobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link class="link" to="#">Add Post</router-link>
          <router-link class="link" :to="{ name: 'Login' }"
            >Login/Sign-up</router-link
          >
        </ul>
      </div>
    </nav>
    <img
      alt="bars icon"
      src="../assets/Icons/bars-regular.svg"
      class="bars-icon"
      @click="toggleMobileNav"
      v-show="showMobile"
    />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="showMobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Add Post</router-link>
        <router-link class="link" :to="{ name: 'Login' }"
          >Login/Sign-up</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navigation",
  data() {
    return {
      showMobile: null,
      showMobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 800) {
        this.showMobile = true;
        return;
      }
      this.showMobile = false;
      this.showMobileNav = false;
      return;
    },

    toggleMobileNav() {
      this.showMobileNav = !this.showMobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 700;
    padding: 0 0.5rem;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 1rem 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 1.5rem;
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .home-logo {
        cursor: pointer;
        top: 1.5rem;
        height: 1.5rem;
        width: auto;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 2rem;

        .link {
          margin-right: 2rem;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .bars-icon {
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top: 1.5rem;
    height: 1.5rem;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: #fff;
      font-weight: 700;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
