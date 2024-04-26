import router from "@/router";
import { usePermissionStore } from "@/store/modules/permission";
import { useUserStore } from "@/store/modules/user";
import { getToken } from "@/utils/cookies";

const whiteList = ["/login", "/register", "/404"];

router.beforeEach(async (to, from, next) => {
  const permissionStore = usePermissionStore();
  const userStore = useUserStore();
  if (getToken()) {
    if (to.path === "/login" || to.path === "/register") {
      next("/home");
    } else if (!permissionStore.isGettedMenu) {
      await permissionStore
        .generateMenus()
        .then(() => {
          return userStore.getUserInfo();
        })
        .then((res) => {
          console.log(res);
          return permissionStore.getAsyncRouters();
        })
        .then((res) => {
          next({ ...to, replace: true });
          console.log(res);
        });
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) > -1) {
    next();
  } else {
    next("/login");
  }
});
