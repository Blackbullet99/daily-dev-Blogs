<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h1 v-if="post.welcomeScreen">{{ post.title }}</h1>
        <h1 v-else>{{ post.title }}</h1>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p class="content-preview" v-else>{{ post.blogHTML }}</p>
        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
          Login/Sign-up
          <img
            alt="arrow"
            src="../assets/Icons/arrow-right-light.svg"
            class="arrow arrow-light"
          />
        </router-link>
        <router-link class="link" v-else to="#">
          Read More
          <img
            alt="arrow"
            src="../assets/Icons/arrow-right-light.svg"
            class="arrow"
          />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img v-if="post.welcomeScreen" src="" alt="blog post card" />
      <img v-else src="" alt="blog post card" />
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: ["post"],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 700px) {
    min-height: 650px;
    max-height: 650px;
    flex-direction: row;
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 700px) {
      order: 1;
    }
    @media (min-width: 800px) {
      flex: 3;
    }

    div {
      max-width: 375px;
      padding: 72px 24px;
      @media (min-width: 700px) {
        padding: 0 24px;
      }

      h2 {
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        @media (min-width: 700px) {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.7;
      }

      .content-preview {
        font-size: 0.9rem;
        max-height: 1.5rem;
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 2rem;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: all 0.5s ease-in;

        &:hover {
          border-bottom: 1px solid #303030;
        }
      }

      .link-light {
        &:hover {
          border-bottom-color: #ffff;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 700px) {
      order: 2;
    }
    @media (min-width: 800px) {
      order: 4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  .blog-content {
    background-color: #303030;
    color: #ffff;
  }
}
</style>
