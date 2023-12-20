<template>
  <n-layout has-sider class="layout-box">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >

      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered> 颐和园路 </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-footer bordered> 成府路 </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import type { MenuOption } from "naive-ui";

const menuOptions: MenuOption[] = [
  {
    label: "首页",
    key: "hear-the-wind-sing",
    children: [
      {
        label: "地府大数据",
        key: "rat",
      },
    ],
  },
  {
    label: "生死簿",
    key: "pinball-1973",
    children: [
      {
        label: "用户管理",
        key: "rat",
      },
      {
        label: "数据同步",
        key: "rat",
      },
    ],
  },
  {
    label: "勾魂管理",
    key: "a-wild-sheep-chase",
    children: [
      {
        label: "勾魂使者",
        key: "rat",
      },
      {
        label: "勾魂数据",
        key: "rat",
      },
    ],
  },
  {
    label: "阎王殿审判",
    key: "dance-dance-dance",
    children: [
      {
        label: "十殿",
        key: "beverage",
      },
      {
        label: "审判记录",
        key: "food",
      },
      {
        label: "数据同步",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
  {
    label: "十八层地狱",
    key: "pinball-1973",
    children: [
      {
        label: "设备管理",
        key: "rat",
      },
      {
        label: "作业流程",
        key: "rat",
      },
      {
        label: "地狱数据",
        key: "rat",
      },
    ],
  },
  {
    label: "六道轮回",
    key: "pinball-1973",
    children: [
      {
        label: "轮回盘",
        key: "rat",
      },
      {
        label: "轮回记录",
        key: "rat",
      },
    ],
  },
  {
    label: "冥币管理",
    key: "pinball-1973",
    children: [
      {
        label: "汇款",
        key: "rat",
      },
      {
        label: "汇款管理",
        key: "rat",
      },
    ],
  },
  {
    label: "日志管理",
    key: "pinball-1973",
  },
  {
    label: "角色权限",
    key: "pinball-1973",
    children: [
      {
        label: "角色管理",
        key: "rat",
      },
      {
        label: "权限设置",
        key: "rat",
      },
    ],
  },
  {
    label: "系统管理",
    key: "pinball-1973",
    children: [
      {
        label: "管理员",
        key: "rat",
      },
      {
        label: "系统设置",
        key: "rat",
      },
    ],
  },
];

const activeKey = ref<string | null>(null);
const collapsed = ref(true);
</script>

<style lang="scss" scoped>
.layout-box{
  height: 100vh;
}
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
