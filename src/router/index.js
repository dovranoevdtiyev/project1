import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import carousel from "../views/carousel.vue";
import tailwind from "../views/tailwind.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/carousel",
    name: "carousel",
    component: carousel,
  },
  {
    path: "/tailwind",
    name: "tailwind",
    component: tailwind,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
