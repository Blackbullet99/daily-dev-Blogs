import { createStore } from "vuex";

export default createStore({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "../assets/blogCards/stock-1.jpg",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "../assets/blogCards/stock-2.jpg",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "../assets/blogCards/stock-3.jpg",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "../assets/blogCards/stock-4.jpg",
        blogDate: "May 1, 2021",
      },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
  },
  actions: {},
  modules: {},
});
