import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
