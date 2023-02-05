import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RequestView from "@/views/RequestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "Request",
      component: RequestView,
    },
  ],
});

export default router;
