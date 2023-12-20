import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

export const contantRoutes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: () => import('@/Layout/index.vue'),
    meta:{
      title:'首页'
    }
  },
  {
    path: "/login",
    component: () => import("@/view/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: contantRoutes,
});

export default router;
