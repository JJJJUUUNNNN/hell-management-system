import { defineStore } from "pinia";
import router from "@/router";
import { getRouters } from "@/api/permission";

type meta = {
  name: string;
};

interface Route {
  path: string;
  url: string;
  meta: meta;
}

const dynamicRoutes: Array<Route> = [
  {
    path: "/home",
    url: "home",
    meta: {
      name: "首页",
    },
  },
  {
    path: "/about",
    url: "about",
    meta: {
      name: "关于",
    },
  },
  {
    path: "/account",
    url: "account",
    meta: {
      name: "个人中心",
    },
  },
];

const notFoundPage = {
  path: "/:pathMatch(.*)*",
  component: () => import("@/view/error/404.vue"),
  name: "404",
  meta: {
    title: "404",
  },
};

export const usePermissionStore = defineStore("id", {
  state: () => {
    const menus: Array<Route> = [];
    return {
      menus,
      asyncMenus: [],
    };
  },
  getters: {
    isGettedMenu: (state) => state.menus.length !== 0,
  },
  actions: {
    generateMenus() {
      return new Promise((resolve: any) => {
        this.menus = dynamicRoutes;
        dynamicRoutes.forEach((navigation) => {
          router.addRoute("Layout", {
            path: navigation.path,
            name: navigation.url,
            component: () => import(`../../view/${navigation.url}/index.vue`),
          });
        });
        router.addRoute(notFoundPage);
        resolve();
      });
    },
    resetMenu() {
      this.menus.forEach((navigation) => {
        router.removeRoute(navigation.url);
      });
      router.removeRoute(notFoundPage.name);
      this.$reset();
    },
    getAsyncRouters() {
      return getRouters().then((res:any) => {
        this.asyncMenus = res.data;
        return res;
      });
    },
  },
});
