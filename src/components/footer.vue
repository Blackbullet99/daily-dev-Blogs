<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >DailydevBlogs</router-link
          >
          <ul>
            <li>
              <a href="#">
                <img
                  alt="youtube icon"
                  src="../assets/Icons/youtube-brands.svg"
                  class="svg-icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  alt="twitter icon"
                  src="../assets/Icons/twitter-brands.svg"
                  class="svg-icon"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  alt="instagram icon"
                  src="../assets/Icons/instagram-brands.svg"
                  class="svg-icon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'blogs' }"
              >Blogs</router-link
            >
            <router-link v-if="user" class="link" :to="{ name: 'addpost' }"
              >Add post</router-link
            >
            <router-link v-if="!user" class="link" :to="{ name: 'login' }"
              >Login/Sign-up</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2023 All Rights Researved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 2rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0px;
      }
      .header {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 1rem;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        display: flex;
        flex: 1;
        gap: 1rem;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 1.5rem;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }

          .link {
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }

    .right {
      gap: 2rem;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0px;
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>
