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
        :render-label="renderMenuLabel"
      >
      </n-menu>
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>
        <NavHeader />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <RouterView />
      </n-layout-content>
      <n-layout-footer bordered>
        <div class="footer">copyright © jj</div>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { menuOptions } from "@/store/index";
import NavHeader from "@/components/NavHeader/index.vue";
import type { MenuOption } from "naive-ui";

const activeKey = ref<string | null>(null);
const collapsed = ref(true);

function renderMenuLabel(option: MenuOption) {
  if ("href" in option) {
    // return h(
    //   "a",
    //   { href: option.href, target: "_blank" },
    //   option.label as string
    // );
    return 
  }
  return option.label as string;
}
</script>

<style lang="scss" scoped>
.layout-box {
  height: 100vh;
}
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  .footer {
    text-align: center;
  }
}
</style>
@/store/index