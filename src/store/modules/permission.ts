import { defineStore } from "pinia";
import router from "@/router";
import { getRouters } from "@/api/permission";

type meta = {
  title: string;
};

interface Route {
  path: string;
  name: string;
  meta: meta;
}

const dynamicRoutes: Array<Route> = [
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于",
    },
  },
  {
    path: "/account",
    name: "account",
    meta: {
      title: "个人中心",
    },
  },

  {
    path: "/homeHellData",
    name: "homeHellData",
    meta: {
      title: "地府大数据",
    },
  },
  {
    path: "/lifeDeathBookUserManage",
    name: "lifeDeathBookUserManage",
    meta: {
      title: "用户管理",
    },
  },
  {
    path: "/lifeDeathBookDataManage",
    name: "lifeDeathBookDataManage",
    meta: {
      title: "数据同步",
    },
  },
  {
    path: "/seductiveManageManager",
    name: "seductiveManageManager",
    meta: {
      title: "勾魂使者",
    },
  },
  {
    path: "/seductiveManageData",
    name: "seductiveManageData",
    meta: {
      title: "勾魂数据",
    },
  },
  {
    path: "/hellTrialTen",
    name: "hellTrialTen",
    meta: {
      title: "十殿",
    },
  },
  {
    path: "/hellTrialHistory",
    name: "hellTrialHistory",
    meta: {
      title: "审判记录",
    },
  },
  {
    path: "/hellTrialData",
    name: "hellTrialData",
    meta: {
      title: "数据同步",
    },
  },
  {
    path: "/eighteenHellDeviceManage",
    name: "eighteenHellDeviceManage",
    meta: {
      title: "设备管理",
    },
  },
  {
    path: "/eighteenHellWorkProcess",
    name: "eighteenHellWorkProcess",
    meta: {
      title: "作业流程",
    },
  },
  {
    path: "/eighteenHellData",
    name: "eighteenHellData",
    meta: {
      title: "地狱数据",
    },
  },
  {
    path: "/reincarnationDisk",
    name: "reincarnationDisk",
    meta: {
      title: "轮回盘",
    },
  },
  {
    path: "/reincarnationHistory",
    name: "reincarnationHistory",
    meta: {
      title: "轮回记录",
    },
  },
  {
    path: "/moneyTransfer",
    name: "moneyTransfer",
    meta: {
      title: "汇款",
    },
  },
  {
    path: "/moneyManage",
    name: "moneyManage",
    meta: {
      title: "汇款管理",
    },
  },
  {
    path: "/logManage",
    name: "logManage",
    meta: {
      title: "日志管理",
    },
  },
  {
    path: "/roleManage",
    name: "roleManage",
    meta: {
      title: "角色管理",
    },
  },
  {
    path: "/permissionSetting",
    name: "permissionSetting",
    meta: {
      title: "权限设置",
    },
  },
  {
    path: "/systemManager",
    name: "systemManager",
    meta: {
      title: "管理员",
    },
  },
  {
    path: "/systemSetting",
    name: "systemSetting",
    meta: {
      title: "系统设置",
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
            name: navigation.name,
            component: () => import(`../../view/${navigation.name}/index.vue`),
          });
        });
        router.addRoute(notFoundPage);
        resolve();
      });
    },
    resetMenu() {
      this.menus.forEach((navigation) => {
        router.removeRoute(navigation.name);
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
