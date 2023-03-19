<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register for tour free account today!</h2>
        <router-link class="router-button" to="#">
          Register for DailydevBlogs
          <img
            alt="arrow"
            src="../assets/Icons/arrow-right-light.svg"
            class="arrow arrow-light"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {
    BlogPost,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles will all things programming including, HTML, CSS, JavaScript, React, Vue, Node, Express, MongoDB, and more. Register to get started and never miss a post.",
        welcomeScreen: true,
        photo: "coding.jpg",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories.jpg",
        },
        {
          title: "This is a Filler Title2",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone.jpg",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 400;
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
}

.updates {
  .container {
    padding-left: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      flex-direction: row;
      padd: 125px 25px;
    }

    .router-button {
      display: flex;
      font-size: 16px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
