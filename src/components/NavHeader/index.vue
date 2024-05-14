<template>
  <n-flex justify="space-between" align="center">
    <n-flex justify="space-between" align="center">
      <span>我的位置：</span>
      <n-breadcrumb>
        <n-breadcrumb-item> <n-icon /> </n-breadcrumb-item>
        <n-breadcrumb-item> <n-icon /> </n-breadcrumb-item>
        <n-breadcrumb-item> <n-icon /> </n-breadcrumb-item>
      </n-breadcrumb>
    </n-flex>
    <div class="operator">
      <n-flex justify="space-between" align="center">
        <div class="icon-sys icon"></div>
        <div class="icon-msg icon"></div>
        <div class="icon-tasks icon"></div>
        <n-dropdown :options="options" @select="handleSelect">
          <n-avatar
            class="avatar"
            round
            :size="30"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </n-dropdown>
      </n-flex>
    </div>
  </n-flex>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";
import { useUserStore } from "@/store/modules/user";
import router from "@/router";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const route = useRoute();

console.log("route", route, route.meta,router);

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};

const options = ref([
  {
    label: "用户资料",
    key: "profile",
    icon: renderIcon(UserIcon),
  },
  {
    label: "编辑用户资料",
    key: "editProfile",
    icon: renderIcon(EditIcon),
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
]);

function handleSelect(key: string | number) {
  console.log("select:", key);
  switch (key) {
    case "logout":
      logout();
      return;
    case "editProfile":
      console.log("编辑用户资料");
      return;
    case "profile":
      console.log("用户资料");
      return;
    default:
      return;
  }
}

function logout() {
  userStore.logout();
  router.replace("/");
}
</script>

<style lang="scss" scoped>
.icon {
  width: 19px;
  height: 19px;
  cursor: pointer;
}

.icon-sys {
  background: url(../../assets/images/icon-sys-gray.png) no-repeat center center;
  background-size: cover;

  &:hover {
    background: url(../../assets/images/icon-sys-blue.png) no-repeat center
      center;
    background-size: cover;
  }
}
.icon-msg {
  background: url(../../assets/images/icon-msg-gray.png) no-repeat center center;
  background-size: cover;

  &:hover {
    background: url(../../assets/images/icon-msg-blue.png) no-repeat center
      center;
    background-size: cover;
  }
}
.icon-tasks {
  background: url(../../assets/images/icon-task-gray.png) no-repeat center
    center;
  background-size: cover;

  &:hover {
    background: url(../../assets/images/icon-task-blue.png) no-repeat center
      center;
    background-size: cover;
  }
}
.avatar {
  cursor: pointer;
}
</style>
