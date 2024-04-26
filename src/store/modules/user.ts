import { defineStore } from "pinia";
import { setToken, removeToken } from "@/utils/cookies";
import type { StateTree } from "pinia";
import { getLogin } from "@/api/login";
import { getInfo } from "@/api/user";
import { usePermissionStore } from "./permission";

export const useUserStore = defineStore("user", {
  state: (): StateTree => ({
    userInfo: {},
  }),
  actions: {
    async login(data: any) {
      return getLogin(data).then((res: any) => {
        if (res.token) {
          setToken(res.token);
        }
      });
    },
    async logout() {
      const permissionStore = usePermissionStore();
      permissionStore.resetMenu();
      removeToken();
    },
    async getUserInfo() {
      return getInfo().then((res: any) => {
        console.log("getInfo", res);
        this.userInfo = res.user;
        return res;
      });
    },
  },
});
