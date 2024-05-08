import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

export const contantRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    name: "Layout",
    component: () => import("@/Layout/index.vue"),
    children:[]
  },
  {
    path: "/login",
    name:'login',
    component: () => import("@/view/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name:'register',
    component: () => import("@/view/register/index.vue"),
    meta: {
      title: "注册",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: contantRoutes,
});

export default router;
