import { createRouter, createWebHistory } from "vue-router";

import routes from "virtual:generated-pages";
import HomeView from "../pages/index.vue";

// const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // routes: [
  //   ...routes.map((route) => ({
  //     ...route,
  //   })),
  // ],
  // routes: [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: HomeView,
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import("../views/AboutView.vue"),
  //   },
  // ],
});

export default router;
