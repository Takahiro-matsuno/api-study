import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/pages/Login.vue";
import Top from "@/components/pages/Toppage.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/top", name: "Top", component: Top },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
